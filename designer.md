# GreenERZY Design System & UI/UX Standards

**GreenERZY EcoTech Pvt. Ltd.** &bull; Document Version: 1.0 &bull; September 2026

---

## 1. Aesthetic Vision & Design Philosophy

The visual identity of GreenERZY balances **institutional trust, cutting-edge deep technology, and human environmental stewardship**. It is designed to inspire confidence among global OEMs, institutional investors, and regional communities alike.

### 1.1 The "Deep Tech Hybrid" Principle
- **70% Visual Experience / 30% Text**: The UI prioritizes interactive topology models, real-time telemetry simulations, and spatial visual metaphors over dense text walls.
- **Selective Darkness for Cinematic Moments**: Hero sections, technology showcases, and network graphs inhabit an obsidian-slate environment (`#040708` to `#0A0F13`), conveying deep technical capability and security.
- **Crisp Light for Institutional Clarity**: Governance, compliance declarations, and verified legal disclosures leverage high-contrast, clean surfaces to inspire unshakeable credibility.

### 1.2 Anti-Patterns (What GreenERZY Must NEVER Look Like)
- ❌ **No generic NGO recycling sites**: Avoid green leaves, trees, cute recycling trucks, or cartoon earth graphics.
- ❌ **No cheap neon gradients**: Avoid aggressive cyberpunk purples, hot pinks, or overwhelming saturated neon greens.
- ❌ **No generic "AI Brain" stock art**: Technology is depicted through actual circuits, hardware components, data packets, and cryptographic hashes.
- ❌ **No fake vanity dashboards**: Do not fabricate unverified counters or fake stock-market-style tickers.
- ❌ **No pitch-deck slide dumps**: Pages are continuous, responsive web experiences—not slides pasted into HTML.

---

## 2. Color Palette & Token System

```
Obsidian Dark (Primary Canvas)
#040708 ── #070C0E ── #0C1418 ── #121E24
  [950]      [900]      [850]      [800]

Emerald Tech (Circularity & Vitality)
#00E599 ── #00D084 ── #059669 ── #064E3B
 [Glow]     [Primary]   [Deep]     [Dark]

Cyber Accents (Intelligence & Governance)
#06B6D4 ── #14B8A6 ── #38BDF8 ── #F59E0B
 [Cyan]     [Teal]     [Sky]      [Amber/Au]

High-Trust Slates (Typography & Borders)
#F8FAFC ── #CBD5E1 ── #94A3B8 ── #1E2A30
 [White]    [Light]    [Muted]    [Border]
```

### 2.1 Color Semantics
- **`bg-obsidian-950` (`#040708`)**: Root viewport background.
- **`bg-obsidian-900` (`#070C0E`)**: Primary card background.
- **`border-emerald-500/30`**: Interactive hardware card border with subtle luminous edge.
- **`text-emerald-400` (`#00D084`)**: Primary brand accent, verified statuses, active stages.
- **`text-cyan-400` (`#06B6D4`)**: Secondary accent for digital telemetry and software protocols.
- **`text-amber-400` (`#F59E0B`)**: Elemental material indicator (Gold, precious metals).

---

## 3. Typography & Hierarchy

The typography pairs an editorial display typeface with a crisp interface sans-serif and a precise monospace font for technical provenance.

| Role | Font Family | Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Display** | *Space Grotesk* | `--font-space-grotesk` | Large hero headlines (`h1`, `h2`), section titles |
| **Interface / Body** | *Inter* | `--font-inter` | Body paragraphs, form controls, card descriptions |
| **Technical / Monospace** | *JetBrains Mono* | `--font-jetbrains-mono` | Eyebrow badges, DID hashes, stage numbers, code labels |

### 3.1 Type Scale Guidelines
- **Hero Title (`h1`)**: `text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]`
- **Section Heading (`h2`)**: `text-3xl sm:text-5xl font-extrabold tracking-tight`
- **Card Heading (`h3`)**: `text-lg sm:text-xl font-bold`
- **Body Regular**: `text-sm sm:text-base font-light text-slate-300 leading-relaxed`
- **Eyebrow / Status Tag**: `text-[10px] sm:text-xs font-mono uppercase tracking-widest`

---

## 4. Spacing, Elevation & Surfaces

### 4.1 Card Anatomy
Every interactive card follows a multi-layer composition:
1. **Background**: Translucent slate-obsidian (`rgba(9, 15, 19, 0.85)`).
2. **Backdrop Filter**: `backdrop-blur-xl`.
3. **Stroke**: 1px subtle border (`border border-emerald-500/20` or `border-slate-800`).
4. **Corner Radius**: Generous `rounded-2xl` (16px) or `rounded-3xl` (24px) to convey human approachability.
5. **Elevation Shadow**: `shadow-xl shadow-black/40` with optional ambient glow (`glow-emerald`).

### 4.2 Circuitry & Glow Utilities
- `.circuit-grid`: Subtle 40px grid pattern created via CSS linear gradients (`rgba(255, 255, 255, 0.04)`).
- `.glow-emerald`: Outer diffused drop-shadow `0 0 35px -5px rgba(0, 208, 132, 0.25)`.
- `.text-gradient-emerald`: White-to-mint-to-emerald linear clipping gradient for signature keywords.

---

## 5. Motion & Micro-Interactions

Motion must feel **intelligent, precise, and measured**—never frantic or distracting.

1. **Pulse Slow**: 4-second gentle expansion on active status indicators.
2. **Interactive Node Scaling**: On hover or click, buttons scale to `scale-[1.02]` with smooth 200ms ease-out transitions.
3. **Timeline Scrubber**: Linear progress fill transitions smoothly (`transition-all duration-300`) as the user scrubs through lifecycle stages.
4. **Celebration Feedback**: Confetti particle burst on successful participation application (`canvas-confetti`).
5. **Prefers-Reduced-Motion**: Animations must degrade to simple opacity or static states when the user has enabled motion reduction in their operating system.

---

## 6. Design Audit Checklist for Agents

When reviewing or generating new UI screens, autonomous agents must verify:

- [ ] Does the page maintain the 70% visual / 30% text balance?
- [ ] Is there an eyebrow badge in monospace font preceding the main heading?
- [ ] Are all buttons and interactive cards equipped with active hover, focus, and touch states?
- [ ] Is contrast compliant with WCAG AA standards (minimum 4.5:1)?
- [ ] Are technical parameters grounded in actual physical/economic value?
- [ ] Is there zero generic environmental clip art (no leaves, green recycling arrows)?
- [ ] Does the layout adapt gracefully from 375px mobile to 1440px+ widescreen?
