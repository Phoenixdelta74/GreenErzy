# GreenERZY Platform Maintenance & Operations Guide

**GreenERZY EcoTech Pvt. Ltd.** &bull; Document Version: 1.0 &bull; September 2026

---

## 1. Routine Operational Maintenance

This guide details the maintenance lifecycle, monitoring procedures, updates, and emergency recovery operations for the GreenERZY web platform.

### 1.1 Maintenance Schedule

| Frequency | Task | Owner | Automated / Manual |
| :--- | :--- | :--- | :--- |
| **Daily** | Server runtime health check & error log review | DevOps / Agent | Automated (Uptime monitoring) |
| **Weekly** | Dependency vulnerability scan (`npm audit`) | Dev Lead | Automated (GitHub Dependabot / CLI) |
| **Bi-Weekly** | Review lead submissions & CRM webhook pipeline | Growth / CRM | Manual Verification |
| **Monthly** | Core Web Vitals & Lighthouse score audit | Frontend Team | Automated (Lighthouse CI) |
| **Quarterly** | SEO indexation, sitemap validation & broken link check | Marketing / SEO | Semi-Automated |
| **Bi-Annually**| Security penetration test & TLS/SSL certificate check | Security Team | Automated / Third-Party |

---

## 2. Environment Configuration & Secret Management

All environment variables must be stored securely and injected at build or runtime. Never commit `.env.local` or secret keys to version control.

### 2.1 Standard Variables

```bash
# Application Environment
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://greenerzy.com

# Analytics & Performance (Privacy-compliant cookieless telemetry)
NEXT_PUBLIC_ANALYTICS_ID=grz_analytics_prod

# Lead Management & Webhooks (Server-only)
LEAD_NOTIFICATION_WEBHOOK_URL=https://crm.greenerzy.com/webhooks/leads
LEAD_NOTIFICATION_SECRET=your_secure_random_key_here
SMTP_HOST=smtp.greenerzy.com
SMTP_PORT=587
SMTP_USER=leads@greenerzy.com
SMTP_PASS=your_smtp_password_here
```

---

## 3. Dependency Management & Upgrade Protocol

### 3.1 Security Audits
Run weekly vulnerability scans in the repository root:
```bash
npm audit
```
For minor vulnerability patches that do not introduce breaking API changes:
```bash
npm audit fix
```
> [!CAUTION]
> Never execute `npm audit fix --force` without comprehensive regression testing, as it can install breaking major versions.

### 3.2 Updating Framework & Libraries
To check for outdated packages safely:
```bash
npm outdated
```
Update Next.js minor releases:
```bash
npm install next@latest react@latest react-dom@latest
npm run build
```

---

## 4. Build, Deployment & CI/CD Pipelines

### 4.1 Local Production Verification
Before creating a release commit or PR:
```bash
# 1. Type check
npx tsc --noEmit

# 2. Build production bundle
npm run build

# 3. Test local production server
npm run start
```

### 4.2 Automated GitHub Actions Pipeline (`.github/workflows/ci.yml`)
Recommended continuous integration pipeline checks:
1. Lint & Format check (`npm run lint`)
2. TypeScript compilation (`tsc --noEmit`)
3. Static page generation (`npm run build`)
4. Health check ping on generated build artifacts

### 4.3 Production Deployment Options
- **Vercel / AWS Amplify / Cloudflare Pages**: Automatic deployment upon pushing to `main` branch.
- **Docker Containerized Deployment**:
  ```dockerfile
  FROM node:20-alpine AS runner
  WORKDIR /app
  ENV NODE_ENV=production
  COPY .next/standalone ./
  COPY .next/static ./.next/static
  COPY public ./public
  EXPOSE 3000
  CMD ["node", "server.js"]
  ```

---

## 5. Performance & Core Web Vitals Optimization

The platform targets:
- **Largest Contentful Paint (LCP)**: &lt; 1.8s
- **First Input Delay (FID) / INP**: &lt; 100ms
- **Cumulative Layout Shift (CLS)**: &lt; 0.05

### 5.1 Asset Optimization Checklist
- **Images**: Use Next.js `<Image />` component with modern `.webp` or `.avif` formats.
- **Fonts**: Utilize `next/font/google` with `display: swap` to prevent FOIT (Flash of Invisible Text).
- **CSS**: Tailwind CSS handles purging of unused utility classes automatically during `npm run build`.
- **Animations**: Limit heavy SVG redraws to CSS transforms (`translate3d`, `scale`, `opacity`) to ensure 60fps GPU acceleration.

---

## 6. Incident Management & Recovery Runbook

### 6.1 Lead Ingestion Failure (`/api/leads` returns 500)
1. Inspect server logs in Vercel / CloudWatch for JSON payload syntax errors.
2. Verify downstream webhook connectivity (CRM endpoint availability).
3. If CRM is down, ensure fallback in-memory or queue buffering logs the submission securely.

### 6.2 SSL / TLS Expiry
- If deployed via managed DNS (Vercel / Cloudflare), certificates renew automatically via Let's Encrypt / DigiCert.
- For custom servers, verify certbot status: `sudo certbot renew --dry-run`.

### 6.3 Emergency Rollback
To rollback to the prior stable production build:
```bash
git checkout tags/v1.0.0-stable
npm install
npm run build
npm run start
```
