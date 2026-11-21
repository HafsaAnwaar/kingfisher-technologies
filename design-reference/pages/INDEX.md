# Kingfisher — Full-Nav Design Artifacts

Design references for every marketing route beyond the homepage. Traqo-inspired **structure**; Kingfisher **freight-forwarding ERP** content.

## Positioning

| Traqo (inspo) | Kingfisher |
|---|---|
| Shipper Logistics OS | Freight-forwarding ERP |
| Indent → track → settle | Quotation → job → docs → customs → delivery → costing → invoice |
| FTL / PTL / yard / SIM GPS | Air / Sea FCL·LCL / NVOCC / Land·Courier / Customs / Warehouse |
| Manufacturer personas | Forwarders, NVOCC, brokers, CFS, transporters, courier |

Visual system: `#08091F`, accent `#FF751F`, Geist + Instrument Serif + Geist Mono, sticky glass nav, light/dark tokens — matches [`../Main.dc.html`](../Main.dc.html).

## Sitemap

| Route | Artifact |
|---|---|
| `/` | [`../Main.dc.html`](../Main.dc.html) (done) |
| Shell reference | [`_shell.dc.html`](_shell.dc.html) |
| `/platform` | [`platform.dc.html`](platform.dc.html) |
| `/platform/air-freight` | [`platform-air-freight.dc.html`](platform-air-freight.dc.html) |
| `/platform/sea-freight` | [`platform-sea-freight.dc.html`](platform-sea-freight.dc.html) |
| `/platform/nvocc` | [`platform-nvocc.dc.html`](platform-nvocc.dc.html) |
| `/platform/land-courier` | [`platform-land-courier.dc.html`](platform-land-courier.dc.html) |
| `/platform/customs` | [`platform-customs.dc.html`](platform-customs.dc.html) |
| `/platform/documentation` | [`platform-documentation.dc.html`](platform-documentation.dc.html) |
| `/platform/warehouse` | [`platform-warehouse.dc.html`](platform-warehouse.dc.html) |
| `/platform/tracking` | [`platform-tracking.dc.html`](platform-tracking.dc.html) |
| `/platform/finance-accounts` | [`platform-finance-accounts.dc.html`](platform-finance-accounts.dc.html) |
| `/platform/reports` | [`platform-reports.dc.html`](platform-reports.dc.html) |
| `/solutions` | [`solutions.dc.html`](solutions.dc.html) |
| `/solutions/freight-forwarders` | [`solutions-freight-forwarders.dc.html`](solutions-freight-forwarders.dc.html) |
| `/solutions/nvocc-operators` | [`solutions-nvocc-operators.dc.html`](solutions-nvocc-operators.dc.html) |
| `/solutions/customs-brokers` | [`solutions-customs-brokers.dc.html`](solutions-customs-brokers.dc.html) |
| `/solutions/cfs-warehouse` | [`solutions-cfs-warehouse.dc.html`](solutions-cfs-warehouse.dc.html) |
| `/solutions/importers-exporters` | [`solutions-importers-exporters.dc.html`](solutions-importers-exporters.dc.html) |
| `/solutions/transporters` | [`solutions-transporters.dc.html`](solutions-transporters.dc.html) |
| `/solutions/courier-companies` | [`solutions-courier-companies.dc.html`](solutions-courier-companies.dc.html) |
| `/customers` | [`customers.dc.html`](customers.dc.html) |
| `/pricing` | [`pricing.dc.html`](pricing.dc.html) |
| `/about` | [`about.dc.html`](about.dc.html) |
| `/careers` | [`careers.dc.html`](careers.dc.html) |
| `/contact` | [`contact.dc.html`](contact.dc.html) |

**Deferred:** Blog, Guides, Press, Docs, Webinars, Comparisons.

## Page recipes

### Platform module (Traqo `/products/*`)
1. Hero · 2. Product stage UI · 3. Before/After · 4. How it works (3) · 5. Feature grid (4) · 6. Proof + quote · 7. Related modules · 8. FAQ · 9. Demo CTA

### Solutions persona (Traqo `/solutions/*`)
1. Hero · 2. Live ops mock · 3. Staged workflow (3) · 4. Result quote · 5. FAQ · 6. Demo CTA

### Customers
Stats → logos → filterable stories → before/after → security → FAQ → demo CTA

### Pricing
Hero → Starter/Growth/Enterprise + monthly/annual → jobs/month + modes → module toggles → quote → compare table → FAQ → CTA

### About / Careers / Contact
Mission + timeline · culture + roles · form + channels + offices

## Regeneration

```bash
node design-reference/pages/generate.mjs
```

Edits to shared chrome or content data should go in [`generate.mjs`](generate.mjs), then re-run.

## Cross-link checklist

- Sticky nav Platform mega → all 10 module artifacts + hub
- Sticky nav Solutions mega → all 7 solution artifacts + hub
- Footer Platform labels match live site (`Sea FCL & LCL`, etc.)
- Footer Company → About, Customers, Pricing, Careers, Contact
- Related-module strips only link existing platform artifacts
- Demo CTAs → `contact.dc.html` / `#demo`
- Home references → `../Main.dc.html` (+ `#product-demo`, `#implementation`, `#faq`)
