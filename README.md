# Forex Bank Pro - Redesign

Production-ready redesign of **Forex Bank Pro** ([forexbankpro.com](https://www.forexbankpro.com/)), an automated forex trading platform offering institutional-grade Expert Advisor (EA) services, 24-hour market access, and advanced downside risk controls.

## Design System
- **Theme**: Dark theme canvas (`#0B0B0B`), section bands (`#141414`), cards (`#1A1A1A` with 1px `#2A2A2A` borders and 16px/24px radii).
- **Accent**: Neon Lime (`#B6F35A`) for primary pill buttons, active badges, icons, check marks, highlighted copy, and the full-width partner band.
- **Typography**: Google Fonts **Plus Jakarta Sans**, bold titles, muted gray body (`#A1A1AA`), tabular figures for financial data.
- **Motion**: Fluid page transitions (`motion`), interactive 3D phone hero mockup that tilts with mouse movement, floating currency coins and sparkles, infinite ticker and partner marquee with hover pause, animated counters, and interactive quiz/calculators.

## Key Features & Pages
- **Interactive Tools**:
  - `/calculator`: Live Pip & Profit/Loss calculator with currency conversion and real-time parameter tweaking.
  - `/pre-test`: 5-question trader risk & knowledge assessment with instant feedback, scoring, and confetti.
  - `/contact`: Includes embedded Google Map of the Austin, TX headquarters, direct emails, and validated form.
- **Registration**:
  - `/register/live`: Live account registration from $250 minimum deposit with Zod + React Hook Form validation.
  - `/register/demo`: Free demo account setup with $10,000 virtual balance.
- **Full Route Catalog**:
  - `/` (Home page with complete 12-section flow matching design reference)
  - `/about` (Why Us, Our System architecture, Vision)
  - `/plans` (Account tier comparison table & parameters)
  - `/products/forex`, `/products/share-cfds`, `/products/commodities`
  - `/funds/safety`, `/funds/deposit`, `/funds/client-services`
  - `/partnership/representatives`, `/partnership/affiliates`
  - `/media` (Insights, webinars, and educational articles with category filter)
  - `/faq` (Searchable knowledge base accordion)
  - `/login` (Client portal sign in)
  - `/privacy`, `/terms`, `/risk-disclosure` (Full compliance notices)

## Local Development Setup

1. **Clone & Install**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Available variables:
   - `VITE_API_URL`: Optional custom backend API endpoint for form submissions. If empty or undefined, forms seamlessly simulate realistic success out of the box.

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Deploying to Vercel

The application is pre-configured for instant zero-configuration deployment to **Vercel** with the included `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Steps to Deploy:
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Click **Deploy**.

## Compliance & Fiduciary Notice
CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Forex Bank Pro provides algorithmic software tools; automated trading does not eliminate market risk.
