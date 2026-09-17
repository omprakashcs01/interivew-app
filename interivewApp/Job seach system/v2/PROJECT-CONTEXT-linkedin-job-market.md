# PROJECT CONTEXT — LinkedIn Job-Market Analysis for Profile Optimization

**Owner:** Om (omprakashcs010@gmail.com)
**Created:** 2026-09-17
**Purpose:** Full working context. Re-attach this file to a new conversation to resume without re-deriving anything.

---

## 0. Goal

Collect and analyse India-based LinkedIn job-market data for roles relevant to Om's profile
(React Native / Mobile App Developer / Mobile Engineer / Frontend Developer / React.js),
in order to later optimise his LinkedIn profile **truthfully** — adding only vocabulary for
skills he actually has.

**Current stage:** Market analysis is COMPLETE and audited. Profile optimisation has NOT started.
**Next step:** Compare findings against Om's real experience, then edit the profile.

---

## 1. Tool / Actor knowledge (learned, verified)

**Actor:** `curious_coder/linkedin-jobs-scraper` (Apify, id `hKByXkMQaC5Qt9UMN`)

- **No LinkedIn login or cookies required.** Scrapes the public, logged-out job search.
  There is no session input field at all.
- Logged-in-only data (apply URLs, skills lists, applicant insights) requires the sibling
  Actor `curious_coder/linkedin-jobs-search-scraper` ("Advanced").
- **Pricing:** pay-per-event. Result = $0.002 (FREE tier) / $0.001 (paid tiers). Actor start
  ≈ $0.00005/GB. Dataset *reads* are free and unlimited.
- **1,000 jobs per search URL** hard cap. `splitByLocation` + `splitCountry` is the workaround
  (IN is supported) but it OVERWRITES the location in input URLs.

### Critical behaviours discovered by running it

1. **When `urls` is set, ALL AI filter inputs are ignored** (`keywords`, `location`, `geoId`,
   `datePosted`, `companyIds`, `under10Applicants`). Filters must be encoded in the URL.
   `datePosted: pastMonth` → `f_TPR=r2592000`.
2. **The Actor de-duplicates ACROSS URLs WITHIN a single run.** 692 rows returned 692 unique
   IDs with heavily overlapping queries — statistically impossible without dedup.
   Consequence: **`inputUrl` records the FIRST query to claim a job, not every query that
   matches it.** Query-overlap analysis is impossible within one run. Per-query counts are
   partly an artefact of input list order.
   - This is why `Software Engineer React Native` returned **0 results** — earlier queries had
     already absorbed every matching RN posting.
   - Dedup does NOT span runs: the 10 smoke-test jobs were re-scraped and re-billed in run 2.
3. **The README's output schema is wrong.** Fields that do NOT exist in actual output:
   `workplaceTypes`, `workRemoteAllowed`, `postedAtTimestamp`, `benefits`, `salaryInsights`,
   `expireAt`, `insights`.
   Fields that DO exist but aren't advertised: `applyUrl`, `inputUrl`, `trackingId`, `refId`, `salary`.
4. `applicantsCount` is a **capped string** — saturates at "200". Useless for competition analysis.
5. `salary` was empty on 100% of India results.
6. `seniorityLevel` is ~51% "Not Applicable" — do not use for analysis.
7. LinkedIn's AI search killed most classic filters. Only **Date posted, Company, Easy Apply,
   Under 10 applicants** survive. Experience level / job type / workplace type must be
   post-filtered from `descriptionText`.
8. Quoted phrases (`%22React%20Native%22`) DO survive AI search intact.
9. `geoId=102713980` = India — **verified correct**, 692/692 results genuinely Indian.

---

## 2. Runs executed (do not repeat — data already collected)

| Run | Run ID | Dataset ID | Results | Cost |
|---|---|---|---|---|
| Smoke test (1 URL, `"React Native"`) | `zJL0ycKyRB9g8PusB` | `MNjWnWEXOJwvgYWOC` | 10 | $0.02 |
| Pilot (11 URLs) | `9q6849dzyxmrZSaEU` | `jgysQCU5kKsrFjvGi` | 692 | $1.384 |
| **Total** | | | **702 gross → 692 unique** | **~$1.40** |

**Both datasets persist on Apify's servers indefinitely and contain full `descriptionText` /
`descriptionHtml`. Re-reading them costs nothing.** Direct `api.apify.com` access was blocked by
egress policy in the cloud container — data had to be pulled via the Apify MCP tool
(`get-dataset-items`), paging with `limit:100` and narrowed `fields`.

### The 12 pilot queries (India, geoId 102713980, f_TPR=r2592000, limitPerSource 75, scrapeCompany false)

| # | Keywords | Result |
|---|---|---|
| 1 | `"React Native"` | 10 (smoke test, limit 10) |
| 2 | Mobile App Developer | 71 |
| 3 | Mobile Engineer React Native *(amended from "Mobile Engineer" to kill telecom/RF/5G noise — worked perfectly, 0 telecom results)* | 74 |
| 4 | Cross Platform Mobile Developer | 74 |
| 5 | React Developer | 74 |
| 6 | Frontend Developer | 71 |
| 7 | Frontend Engineer | 42 |
| 8 | Software Engineer React Native | **0** (cannibalised by within-run dedup) |
| 9 | Software Developer React JavaScript | 74 |
| 10 | Application Developer Mobile Android iOS | 74 |
| 11 | UI Engineer React JavaScript | 64 |
| 12 | Associate Software Engineer JavaScript React | 74 |

URL template:
`https://www.linkedin.com/jobs/search/?keywords=<ENC>&location=India&geoId=102713980&f_TPR=r2592000&position=1&pageNum=0`

---

## 3. Dataset scope (state this before any claim)

Pilot sample of **692 unique LinkedIn postings**, collected 2026-09-17, India,
posted 2026-08-18 → 2026-09-17. Each query returned LinkedIn's **top ~75 by relevance**,
not a random sample. Queries were deliberately chosen to find React Native work.

**Required language:** "in this pilot sample", "among the jobs collected", "within the analyzed dataset".
**Forbidden:** "half the Indian React Native market", "the Indian RN market is overwhelmingly mid-level",
absolute demand volume, any trend claim.

---

## 4. Deduplication rules (applied, keep for future merges)

1. **Primary: LinkedIn `id`.** Resolved all 10 cross-run duplicates. Zero nulls.
2. Fallback: normalised `link` (trailing numeric segment of `/jobs/view/<slug>-<id>`). Never needed.
3. `title|company|location` composite = **review flag only, never auto-merge.**
   33 same-title+company clusters found; 20 span multiple locations and were KEPT SEPARATE.
4. On collapse: keep longest `descriptionText`; prefer rows with non-null `jobPosterName`.
5. `sourceQueries` = union ACROSS runs (never from a single run's `inputUrl` — see §1.2).
6. Same company + same title + different IDs + different cities = **distinct postings, not duplicates.**

---

## 5. React Native classification rules (four tiers, context-aware)

Applied to `title + descriptionText` with word boundaries.

- **RN Required** — RN in title; OR named in a requirement context (`must have`, `mandatory`,
  `strong experience/expertise/command`, `core stack`, `years of experience with`) without being
  framed as optional or as one of several alternatives; OR ≥5 mentions in a requirement context
  where Flutter does not outweigh it.
- **RN Strong** — required-sounding but co-listed with Flutter/native as alternatives
  (e.g. "React.js, React Native, and/or Flutter").
- **RN Optional** — only under `nice to have` / `preferred` / `is a plus`; or only one item in an
  alternatives list; or Flutter mentioned >2× as often as RN.
- **Not RN** — no literal React Native mention.

### Regex traps that MUST be guarded (all hit us for real)

- `react` → matches **reactive, reaction, reactor, proactive**. Use `\breact\b`.
- `expo` → matches **exposure, export, exponential, exposition**. Use `\bexpo\b`.
- `fabric` → 11 of 692 hits, only 5 are RN. Rest are network/data "fabric"
  (Palo Alto Networks, Tata Communications "Digital Fabric"). Only count when RN present.
- `rest` → matched "the rest of". Require `rest api|restful|rest services`.
- `offline` → too loose. Require `offline storage|async storage|offline-first|offline mode`.
- **Forward context windows** catch "Good to have skills : NA" immediately after
  "Must have skills : React Native" and wrongly demote it. Check optional-markers BACKWARD only;
  forward window must stop at the next bullet/sentence boundary.
- Years-of-experience parsing must require proximity to an experience phrase, else it grabs
  "2 years of React" style fragments. Corrected parser coverage: 76.0%.

---

## 6. FINAL CORRECTED NUMBERS (denominator = 692 unless stated)

### React Native tiers
| Tier | n | % of 692 |
|---|---|---|
| RN Required | **107** | 15.5% |
| RN Strong | **13** | 1.9% |
| RN Optional | **29** | 4.2% |
| Not RN | 543 | 78.5% |

RN-mentioning population = 149 (21.5%). **Analysis cohort = RN Required + Strong = 120 (17.3%).**

### Role categories
| Category | n | % |
|---|---|---|
| React / Frontend | 353 | 51.0% |
| React Native (all tiers) | 149 | 21.5% |
| Mobile Native | 92 | 13.3% |
| Cross-Platform Mobile | 51 | 7.4% |
| Adjacent Frontend Framework | 30 | 4.3% |
| General Software but relevant | 17 | 2.5% |

### Relevance
Medium 552 (79.8%) · High 85 (12.3%) · Low 55 (7.9%) · **Irrelevant 0**

### Hidden React Native (title does NOT say "React Native")
- **106 of 149** RN-mentioning jobs are hidden.
- **64 of 107 RN Required (59.8%)** are hidden. All 13 RN Strong and all 29 RN Optional are hidden.
- Generic titles (no tech term at all): 185 of 692 → 25 RN Required, 4 Strong, 9 Optional, 147 Not RN.

**Hidden RN title families** [denominator = 77 hidden Required+Strong]:
Mobile Developer/Engineer 26 (33.8%) · Frontend Developer/Engineer 12 (15.6%) ·
Software Engineer/Developer 10 (13.0%) · SDE 9 (11.7%) · Full Stack 7 (9.1%) ·
Application/App Developer 6 (7.8%) · Lead/Principal/Architect 2 · Other 5

### Skills — RN Required + Strong [denominator = 120]
React Native 100% · React 99.2% · Android 70.0% · iOS 66.7% · Debugging 61.7% ·
JavaScript 61.7% · TypeScript 60.0% · CI/CD 57.5% · Testing(any) 56.7% · Git 51.7% ·
Cross-platform 46.7% · App Store/Play Store 41.7% · Agile 33.3% · Redux 32.5% ·
REST API 31.7% · Kotlin 30.0% · Swift 25.8% · GraphQL 25.8% · Performance Opt 24.2% ·
Flutter 21.7% · Authentication 20.0% · Firebase 18.3% · App Releases 18.3% · **Expo 16.7%** ·
CSS 16.7% · Native Modules 15.8% · AWS 15.8% · Jest 15.0% · Offline Storage 14.2% ·
Xcode 13.3% · Zustand 10.8% · Context API 10.8% · Android Studio 10.8% · GitHub Actions 8.3% ·
MobX 8.3% · Redux Toolkit 7.5% · CodePush/OTA 7.5% · JSI 5.8% · **Fastlane 5.8%** ·
Appium 5.0% · Detox 4.2% · New Architecture 4.2% · Fabric 4.2% · Hermes 3.3% · TurboModules 3.3%

**New Architecture cluster counts are n=4–7. TOO SMALL FOR ANY TREND CLAIM.**

### Experience (parsed rows only; unparsed excluded)
| Band | All 692 (526 parsed, 76.0%) | RN Req+Strong (92 parsed, 76.7%) |
|---|---|---|
| 0–1 | 12.9% | 13.0% |
| 2–3 | 41.6% | 44.6% |
| 4–5 | 27.8% | 25.0% |
| 6–8 | 13.9% | 9.8% |
| 9+ | 3.8% | 7.6% |

### Cities
All 692: Bengaluru 35.7% · Hyderabad 12.0% · Delhi NCR 11.8% · Pune 10.4% · Chennai 7.1% · "India" 6.5%
RN Req+Strong (120): Bengaluru 38.3% · Pune 12.5% · Delhi NCR 10.8% · Hyderabad 10.0% · "India" 10.0% · Chennai 7.5%

### Job-poster coverage
All 692: 15.3% · RN Req+Strong: 19.2% · RN Required: 20.6%

### Work mode (parsed from text; NO structured field exists)
RN Req+Strong: no mention 56.7% · Remote 20.0% · Onsite 15.8% · Hybrid 15.8%
**Too sparse to draw conclusions.**

### Company concentration warning
Accenture in India 37 + Infosys 17 = 7.8% of sample, heavy reposting.
In the RN Required+Strong cohort concentration disappears (max Infosys 4, then 1–2 each).

### Audit set: 85 rows
55 Low-relevance + 29 RN Optional + 2 data-quality (overlapping). Nothing deleted.
Only 2 rows have descriptions <200 chars (EXL "Senior Frontend Developer" 102 chars;
Ascendion "Front End UI Engineer" 108 chars).

---

## 7. SAFE CONCLUSIONS for LinkedIn optimisation

1. Title-only searching misses most RN roles here — 59.8% of RN Required don't say it in the title.
   Profile must surface for "Mobile Engineer", "Mobile Developer", "SDE", "Software Engineer".
2. "Mobile Developer / Mobile Engineer" is the highest-yield adjacent title (33.8% of hidden RN).
3. Android + iOS platform literacy near-universal in RN postings (70.0% / 66.7%) — sharpest
   separator from pure frontend (2% / 1%).
4. TypeScript (60.0%) now as expected as JavaScript (61.7%).
5. CI/CD asked in 57.5% but Fastlane only 5.8% — describe outcomes (builds, releases, store
   submissions), not vendors.
6. Store release experience asked in 41.7%.
7. Redux (32.5%) is the default vocabulary; Zustand 10.8%; Redux Toolkit only 7.5%.
8. Debugging (61.7%) and performance optimisation (24.2%) beat most named libraries.
9. Bengaluru largest at 38.3% of RN postings; 10% state no city.
10. Only ~1 in 5 RN postings names a recruiter — the profile must do the work.

**NOT safe:** market-wide claims, tech-adoption trends, absolute demand volume,
remote/hybrid/onsite split.

---

## 8. Corrections made during the work (for trust calibration)

| Item | Was | Corrected to | Cause |
|---|---|---|---|
| RN "core" count | 85 | 107 | Mechanical ≥3-mentions rule replaced by context parsing |
| RN total | 150 | 149 | One Expo-only posting had no literal "React Native" |
| Hidden RN | 42 | 77 (Req+Strong) | Follows from larger Required tier |
| Fastlane | "~3%" | 5.8% of 120 / 3.0% of 692 | No denominator stated originally |
| Fabric | "<8%" | 4.2% of 120 | Non-RN "fabric" senses excluded |
| Experience parsed | 83% | 76.0% | Stricter parser; also fixed values (5→11, 3→1) |
| Audit rows | 55 | 85 | RN Optional rows added |
| Irrelevant | "1 Flutter posting" | 0 | **Prose was wrong, CSV was right** — the row was EXL's 102-char frontend job, reclassified Low/unclassifiable |
| Mobile Native jobs | 35 in "Irrelevant" | reclassified | Classifier gap dumped legit iOS/Android/Flutter roles into Irrelevant |
| `workplaceTypes` promised | listed as retained | does not exist | Trusted README over actual run output |

---

## 9. Files produced

| File | Contents |
|---|---|
| `india-job-market-classified.csv` | All 692 rows, full classification, 26 columns |
| `hidden-react-native-jobs.csv` | 106 hidden RN jobs by tier, with quoted evidence snippets |
| `audit-and-rejected.csv` | 85 audit rows with exclusion reason |
| `apify-linkedin-pilot-input.json` | The exact 12-URL Actor input |
| `PROJECT-CONTEXT-linkedin-job-market.md` | This file |

---

## 10. Open options for next session

- **Profile optimisation (the actual goal).** Needs from Om: which skills he has genuinely shipped,
  years of experience, whether he's used Expo, native module work, real CI/CD and release involvement.
- Re-run `Software Engineer React Native` alone (~$0.15) — it returned 0 only because of
  within-run dedup, so as a solo run it would yield real results.
- Per-query separate runs if true query-overlap data is wanted (higher cost, needs cross-run dedup).
- Scale up with `splitByLocation` + `splitCountry: "IN"` to beat the 1,000-per-search cap.
- Recurring daily `past24Hours` run to accumulate a longitudinal dataset.
