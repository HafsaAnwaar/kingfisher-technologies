# Claude artifact animation inventory

**Source:** [Kingfisher Tech Website](https://claude.ai/artifact/Ei3D8c1pQdUg1tgwLLHaJm)  
**Frame:** `Ei3D8c1pQdUg1tgwLLHaJm` · version `1795068703-ff88`  
**Deep link opened:** `#page-dcb81aee8d83` (Design runtime page id; board titles below)

Snapshot of every CSS `@keyframes` motion (plus JS-driven cycles) across the 26 boards. Shared chrome (`Nav`, `Footer`) has **0** keyframes.

## Totals

| Metric | Count |
|---|---|
| Boards with motion | **24** / 26 |
| Unique keyframe names (canvas-wide) | **43** |
| Keyframe declarations (sum per board) | **108** |
| JS-driven cycles (`setInterval`) | **3** (Main, Clients, Industries) |

Almost every content board also uses shared **`rise`** (section enter: fade + translateY) and respects `prefers-reduced-motion`.

---

## By page (board order)

### 01 · Home — `Main.dc.html` — **13** keyframes + JS

| Name | How it works |
|---|---|
| `rise` | Section enter: opacity 0→1, translateY 28→0 |
| `flow` | Dashed SVG stroke scrolls (`stroke-dashoffset`) — network lines |
| `draw` | Path stroke draws in once |
| `bob` / `bob2` / `bob3` | Soft vertical float on hero cards (staggered) |
| `ping` / `ping2` | Expanding ring pulse on map nodes |
| `dotp` | Box-shadow pulse on live dots |
| `mq` | Logo marquee: track translates −50% |
| `spin` / `spinrev` | Slow globe / SVG rotate (forward + reverse) |
| `mv` | Markers travel along SVG `offset-path` curves (4 ships/planes) |
| `fillbar` | Progress bar width 0→100% loop |
| `sweep` | Horizontal light sweep across a rail |
| `shimmer` | Opacity pulse on highlight chips |
| `scan` | Vertical scan line moves up/down |
| **JS** | `setInterval` 2.6s advances `tick` state; rAF eases `p` 0→1 over 1.8s for staged UI |

### 02 · Platform — `Platform.dc.html` — **6**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `flow` | Network stroke scroll |
| `spin` / `spinrev` | Dual-direction hub rotate |
| `ping` | Node pulse |
| `bob` | Floating module cards |
| `sweepY` | Vertical scanner sweeps down the product stage |

### 03 · Solutions — Operations — `Operations.dc.html` — **5**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `drive` | Vehicles (`v1`–`v4`) translate across lane (staggered durations) |
| `dash` | Lane dashed background scrolls |
| `dotp` | Orange live-dot pulse |
| `fade` | Panel swap enter |

### 04 · Finance & Accounting — `Finance.dc.html` — **4**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `grow` | Chart bars scaleY 0→1 |
| `flow` | Ledger/link stroke scroll |
| `stamp` | “Paid/approved” stamp scales + rotates in |

### 05 · Sales, CRM & Quotations — `Sales.dc.html` — **5**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `travel` | Deal/token steps across pipeline columns |
| `hue` | Won stage flips fill/border to orange |
| `gp` | Gauge/progress width fill |
| `blink` | Text caret blink |

### 06 · Customer & Vendor Portals — `Portals.dc.html` — **6**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `bob` / `bob2` | Floating portal cards |
| `ring` | Bell/notification wiggle |
| `pop` | Badge/scale pop loop |
| `slidein` (`si1`–`si4`) | Staggered notification list enter |
| `fade` | Soft panel enter |

### 07 · Warehouse & HR — `Warehouse.dc.html` — **5**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `conveyor` (`cv`–`cv3`) | Crates move along X on belt |
| `belt` | Belt texture scroll |
| `slot` (`s1`–`s6`) | Bay lights pulse in sequence |
| `outq` | Outbound package slides off + fades |

### 08 · Developers — API & EDI — `Developers.dc.html` — **6**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `ln` | Code line slide-in |
| `blink` | Terminal caret |
| `up` | Log feed scrolls upward |
| `flow` | API link stroke scroll |
| `ping` | Endpoint node pulse |

### 09 · Security — `Security.dc.html` — **5**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `wave` (`wv`–`wv3`) | Expanding shield rings |
| `draw` | Checkmark stroke draw |
| `packet` | Data packet travels across rail |
| `lit` (`l1`–`l6`) | Security nodes border-color pulse in sequence |

### 10 · Track & Trace — `Track.dc.html` — **3**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `dotp` | Live tracking pulse |
| `flow` | Route stroke scroll |

### 11 · Pricing — `Pricing.dc.html` — **2**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `spin` | Halo rotate behind featured plan |

### 12 · About us — `About.dc.html` — **7**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `dive` | Kingfisher silhouette arcs down into water |
| `ripple` / `rp2` | Water ripples expand after dive |
| `wave` | Water surface drift |
| `grow` | Timeline/stat line width fill |
| `spin` | Halo rotate |
| `bob` (`bob`–`bob3`) | Floating story cards |

### 13 · Resources & Changelog — `Resources.dc.html` — **3**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `fade` | Card scale/fade enter |
| `dotp` | “New” live pulse |

### 14 · Contact / Book a demo — `Contact.dc.html` — **4**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `draw` | Form checkmark stroke |
| `pop` | Success icon pop |
| `flow` | Decorative path scroll |

### 15 · Sign in — `Login.dc.html` — **5**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `flow` | Background path scroll |
| `spin` | Slow decorative SVG rotate |
| `ping` | Auth node pulse |
| `fade` | Form panel enter |

### 16 · FAQ — `FAQ.dc.html` — **5**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `open` | Answer panel expand enter |
| `bubble` (`b1`–`b3`) | Chat bubbles cycle in/out |
| `typing` (`t1`–`t3`) | Typing-indicator dots |
| `dotp` | Online agent pulse |

### 17 · Industries — `Industries.dc.html` — **4** + JS

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `wordin` | Rotating industry word slide-up |
| `fade` | Detail panel enter |
| `orbit` / `orbi` | Dual orbit rings (cw + ccw) |
| **JS** | `setInterval` 2.2s cycles word index `w` % 6 |

### 18 · Services — `Services.dc.html` — **4**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `grow` | Timeline rail fill loop |
| `lit` (`s1`–`s5`) | Service steps highlight in sequence |
| `spin` / `gear2` | Gear icons rotate opposite ways |

### 19 · Clients & case studies — `Clients.dc.html` — **3** + JS

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `mq` | Logo marquee −50% |
| `fade` | Case card enter |
| **JS** | `setInterval` 6s rotates testimonial `idx` % 3 |

### 20 · Careers — `Careers.dc.html` — **3**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `bob` (`b1`–`b5`) | Floating role/avatar cards |
| `fade` | Listing enter |

### 21 · Partners — `Partners.dc.html` — **4**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `flow` | Integration stroke scroll |
| `ping` | Partner node pulse |
| `draw` | Checkmark draw |

### 22 · News & blog — `News.dc.html` — **3**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `fade` | Article card scale-in |
| `flow` | Accent path scroll |

### 23 · Help center — `Support.dc.html` — **4**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `dotp` | Online pulse |
| `bars` | Equalizer-style status bars |
| `pop` | Success/help icon pop |

### 24 · Legal — `Legal.dc.html` — **3**

| Name | How it works |
|---|---|
| `rise` | Section enter |
| `fade` | Section enter soft |
| `scan` | Document scan line vertical |

### Component · Nav — `Nav.dc.html` — **0**
### Component · Footer — `Footer.dc.html` — **0**

---

## Unique keyframe lexicon (43)

`bars` · `belt` · `blink` · `bob` · `bubble` · `conveyor` · `dash` · `dive` · `dotp` · `draw` · `drive` · `fade` · `fillbar` · `flow` · `gp` · `grow` · `hue` · `lit` · `ln` · `mq` · `mv` · `open` · `orbit` · `outq` · `packet` · `ping` · `pop` · `ring` · `ripple` · `rise` · `scan` · `shimmer` · `slidein` · `slot` · `spin` · `stamp` · `sweep` · `sweepY` · `travel` · `typing` · `up` · `wave` · `wordin`

## Machine-readable dump

See [`anim-detail.json`](./anim-detail.json) (keyframes + selector usages per board) and [`canvas.json`](./canvas.json) (board titles / order).

## Mapped into the live site

See `client/src/components/marketing/stages/anim-map.ts` (`ARTIFACT_SITE_MAP`).

| Artifact | Live destination | Motions now on site |
|---|---|---|
| About dive/ripple/wave/bob | `/about` · `AboutDiveStage` | dive, ripple, wave, bob |
| Warehouse conveyor/belt/slots | `/platform/warehouse` · `WarehouseFlowBody` | conveyor, belt, slot, outq |
| Operations drive/dash | `/platform/land-courier` · `PodBoardBody` | drive, dash |
| Finance stamp | `/platform/finance-accounts` · `CostLedgerBody` | stamp POSTED |
| Portals ring/slidein | `/platform/tracking` · `TrackPortalBody` | ring bell, slide-in feed |
| Security packet/wave/lit | `/customers` Security · `SecurityPacketStage` | wave, packet, lit |
| FAQ bubbles/typing | `/#faq` · `FaqChatStage` | bubble, typing, dotp |
| Careers bob pills | `/careers` · `CareersFloatPills` | bob |
| Pricing halo spin | `/pricing` Growth plan | spin |
| Home Main motions | `/` HIW + hero + marquee | already native |
| Login / News / Legal / etc. | no route yet | deferred |

## Note vs live React site

Module pages keep unique boards (not a homepage map clone). Homepage HIW remains the five-flows gold standard.
