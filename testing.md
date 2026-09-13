# GreenERZY Automated Testing & Quality Assurance Guide

**GreenERZY EcoTech Pvt. Ltd.** &bull; Document Version: 1.0 &bull; September 2026

---

## 1. Automated Testing Strategy

This document provides autonomous agents and engineers with the testing harness, test scripts, and validation criteria required to guarantee zero regressions across the GreenERZY web application.

```
+-------------------------------------------------------------------------+
|                           TESTING PYRAMID                               |
|                                                                         |
|      [E2E / User Flows]      Playwright / Cypress (Navigation, Forms)   |
|     [Integration Tests]      API Route & State Machines (Lead Engine)   |
|     [Component / Visual]     Jest + React Testing Library (A11y, UI)    |
|       [Static Analysis]      TypeScript (tsc) + Next.js Lint (ESLint)   |
+-------------------------------------------------------------------------+
```

---

## 2. Static Analysis & Build Verification (Tier 1)

Autonomous agents must execute static analysis before any commit:

```bash
# 1. TypeScript Strict Typecheck
npx tsc --noEmit

# 2. Production Build Check
npm run build
```

**Acceptance Criteria**:
- `npm run build` exits with code `0`.
- 17/17 routes are generated without warnings or circular dependency traces.

---

## 3. Automated API Route Testing (Tier 2)

Test the dynamic lead ingestion endpoint `/api/leads` using the automated test recipe below.

### 3.1 Python Automated API Test Runner (`test_api.py`)
Save in `scratch/test_api.py` and run against `http://localhost:3000`:

```python
import json
import urllib.request
import urllib.error

BASE_URL = "http://localhost:3000"

def test_lead_submission_success():
    url = f"{BASE_URL}/api/leads"
    payload = {
        "pathway": "partner",
        "name": "Test Partner Corporation",
        "email": "partner@greenerzy-test.com",
        "organization": "Apex Hardware Labs",
        "organizationType": "OEM / Hardware Manufacturer",
        "interest": "Digital Product Passport Integration",
        "message": "Automated test inquiry"
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    
    try:
        with urllib.request.urlopen(req) as response:
            assert response.status == 200, f"Expected 200, got {response.status}"
            body = json.loads(response.read().decode("utf-8"))
            assert body["success"] is True, "Expected success: true"
            assert "GRZ-" in body["leadId"], "Expected valid GreenERZY Lead ID format"
            print(" PASS: test_lead_submission_success")
    except Exception as e:
        print(" FAIL: test_lead_submission_success", e)
        raise

def test_lead_submission_validation_failure():
    url = f"{BASE_URL}/api/leads"
    # Missing required name and email
    payload = {"pathway": "partner"}
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    
    try:
        urllib.request.urlopen(req)
        print(" FAIL: test_lead_submission_validation_failure (Expected 400)")
        raise AssertionError("Endpoint accepted invalid payload")
    except urllib.error.HTTPError as e:
        assert e.code == 400, f"Expected HTTP 400, got {e.code}"
        print(" PASS: test_lead_submission_validation_failure (HTTP 400 as expected)")

if __name__ == "__main__":
    print("Executing automated API verification...")
    test_lead_submission_success()
    test_lead_submission_validation_failure()
    print("All API tests passed cleanly.")
```

---

## 4. End-to-End (E2E) & Route Health Automation

### 4.1 Automated HTTP Status Checker (`test_routes.py`)
Validates that every indexable route returns `HTTP 200` without redirect loops or crashes:

```python
import urllib.request

ROUTES = [
    "/",
    "/vision",
    "/ecosystem",
    "/technology",
    "/impact",
    "/industries",
    "/about",
    "/investors",
    "/insights",
    "/join",
    "/contact",
    "/privacy",
    "/terms",
]

BASE_URL = "http://localhost:3000"

def test_all_routes():
    failed = []
    for r in ROUTES:
        url = f"{BASE_URL}{r}"
        try:
            with urllib.request.urlopen(url) as resp:
                if resp.status == 200:
                    print(f" PASS: {r} -> HTTP 200")
                else:
                    print(f" WARN: {r} -> HTTP {resp.status}")
                    failed.append((r, resp.status))
        except Exception as e:
            print(f" FAIL: {r} -> {e}")
            failed.append((r, str(e)))
            
    if failed:
        raise RuntimeError(f"Routes failed: {failed}")
    print("\nAll 13 user routes verified healthy with HTTP 200 OK.")

if __name__ == "__main__":
    test_all_routes()
```

---

## 5. UI/UX Interactive Module Verification Criteria

Agents running visual or headless browser evaluations must verify the following interactive states:

| Component | Target Interaction | Expected Result |
| :--- | :--- | :--- |
| `HeroSection.tsx` | Click *"Telemetry"* / *"Materials"* tabs | Telemetry metrics update dynamically; device node pulse remains active |
| `ProductQuestion.tsx` | Scrub/click steps `1` through `10` | Track line fills smoothly; active step card updates title and description |
| `LinearToCircular.tsx`| Toggle between *"Linear"* and *"Circular"* | Container background shifts between dark-red alert and glowing emerald loop |
| `ProductsToPossibilities.tsx` | Click any of the 7 dimension buttons | Dimension detail card updates with specific capability metrics |
| `EcosystemNetwork.tsx`| Click any of the 13 participant nodes | Active node is highlighted; direct connected partners light up with arrow badges |
| `ProductJourneyStepper.tsx` | Click *"Next"* or step badges | Active step transitions from 1 to 11 with custom ledger hashes |
| `ResourceSimulator.tsx`| Adjust fleet slider (500 to 50k units) | Au, Cu, and CO₂ metrics recalculate in real time |
| `DigitalProductPassport.tsx` | Switch tabs (Overview, BOM, Repairs, EoL) | Data display switches cleanly without layout shift |
| `PathwayFormWizard.tsx` | Switch between 6 pathway tabs | Input fields change to match pathway persona (e.g. Builder vs Investor) |
| `PathwayFormWizard.tsx` | Submit valid form | Button shows spinner &rarr; confetti fires &rarr; confirmation receipt rendered |

---

## 6. Accessibility (a11y) & Performance Benchmarks

### 6.1 Accessibility Criteria (WCAG 2.1 AA)
- **Contrast**: Text elements must maintain a minimum contrast ratio of `4.5:1` against dark backgrounds (`text-slate-300` / `text-white` on `#06090A`).
- **Focus Indicators**: Every interactive control must exhibit visible emerald focus rings (`focus:ring-2 focus:ring-emerald-400`).
- **Screen Reader Support**: All icons must have corresponding semantic text or aria labels.
- **Prefers-Reduced-Motion**: Complex animations must degrade gracefully when `@media (prefers-reduced-motion)` is active.

### 6.2 Performance Targets
- First Load JS shared bundle: &le; 90 kB
- Time to Interactive (TTI): &le; 2.5s on simulated 4G mobile
- Zero cumulative layout shift on font load (`display: swap`).
