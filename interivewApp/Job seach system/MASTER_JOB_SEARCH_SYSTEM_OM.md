# MASTER JOB SEARCH SYSTEM — OM

**Purpose:** A daily, high-coverage job-search system for React Native / Mobile Engineering roles across LinkedIn Jobs, the wider internet, ATS/career pages, and LinkedIn hiring/recruiter posts.

**Main rule:** No source is assumed to be exhaustive. Coverage is improved through overlapping search channels, cross-day deduplication, a persistent Master Job Tracker, and weekly catch-up sweeps.

---

# 1. THE 4-PROMPT SYSTEM

| Prompt | Tool | Purpose | Frequency |
|---|---|---|---|
| **Prompt 1** | Claude Desktop + Apify | Search structured LinkedIn Jobs | Daily |
| **Prompt 2** | Claude Chrome | Deep-check one specific job | Only when needed |
| **Prompt 3** | Claude Desktop + Web + Apify | Search the wider internet, ATSs, career pages and job portals | Daily or 3–4×/week |
| **Prompt 4** | Claude Chrome | Search LinkedIn hiring/recruiter/referral posts | Daily |

### Recommended daily order

**Prompt 1 → Prompt 3 → Prompt 4 → Prompt 2 only when needed**

### Weekly safety sweep

Once a week, rerun:

**Prompt 1 + Prompt 3 + Prompt 4**

with:

**LAST 7 DAYS**

instead of:

**LAST 24 HOURS**

Always deduplicate against the Master Job Tracker.

---

# 2. MASTER JOB TRACKER

Google Sheet name:

**MASTER JOB TRACKER - Om**

## Exact columns

1. First Found Date  
2. Last Seen Date  
3. Company  
4. Role  
5. Location  
6. Work Mode  
7. Experience  
8. Source  
9. Source Type  
10. Job ID  
11. Official Apply URL  
12. LinkedIn URL  
13. RN Level  
14. Discovery Status  
15. Application Status  
16. Applied Date  
17. Referral Status  
18. Recruiter Name  
19. Recruiter Contact  
20. Priority  
21. Next Action  
22. Notes  
23. Dedup Key  

## Dropdown values

### Work Mode
- On-site
- Hybrid
- Remote
- Not stated

### Source Type
- LinkedIn Jobs
- LinkedIn Post
- Official Careers
- ATS
- Job Portal
- Aggregator
- Recruiter / Referral
- Other

### RN Level
- RN REQUIRED
- RN STRONG
- RN OPTIONAL
- NOT RN

### Discovery Status
- NEW TODAY
- SEEN BEFORE
- SAME JOB - NEW SOURCE
- NEW POST FOR EXISTING JOB
- REPOST / SAME HIRING CAMPAIGN
- RESURFACED / OLDER OPENING
- FRESHNESS UNVERIFIED
- ALREADY APPLIED

### Application Status
- Not Applied
- Reviewing
- Applied
- Assessment
- Interview
- Offer
- Rejected
- Withdrawn
- Closed

### Referral Status
- Not Needed
- Not Started
- Requested
- Referred
- Declined
- No Response

### Priority
- High
- Medium
- Low

### Next Action
- Apply
- Request Referral
- Message Recruiter
- Verify Job
- Follow Up
- Prepare Assessment
- Prepare Interview
- No Action

## Dedup Key formula

Put this in `W2`:

```excel
=IF(C2="","",IF(J2<>"",LOWER(TRIM(C2&"|"&J2)),LOWER(TRIM(C2&"|"&D2&"|"&E2))))
```

Fill downward and hide column W.

## Master Tracker rule

**One actual job opportunity = one tracker row.**

If the same vacancy appears on LinkedIn, Workday, Naukri, Indeed and in a recruiter post, do **not** create separate rows.

Prefer:
- official company/ATS URL in **Official Apply URL**
- LinkedIn job URL in **LinkedIn URL**
- recruiter/referral information in the same row
- earliest date in **First Found Date**
- most recent discovery in **Last Seen Date**

If Claude cannot directly access the Google Sheet, export it as:

**MASTER-JOB-TRACKER.csv**

and attach it to the relevant Claude chat.

---

# 3. GLOBAL DEDUPLICATION RULES

Apply these rules across Prompts 1, 3 and 4.

## Match in this order

1. Exact job/requisition ID  
2. Canonical official company/ATS URL  
3. LinkedIn job ID / canonical LinkedIn job URL  
4. Company + role + location + materially same JD  

## Do NOT merge when

- requisition IDs differ
- cities/locations represent genuinely separate openings
- seniority levels are materially different
- JDs are materially different

## If the same job appears from a new source

Use:

**SAME JOB - NEW SOURCE**

Update the existing tracker row.

Do not create another row.

## If a recruiter posts about an existing job

Use:

**NEW POST FOR EXISTING JOB**

Update:
- recruiter name
- contact
- email
- referral information
- post URL
- Last Seen Date

Do not count it as a new job.

## If already applied

Use:

**ALREADY APPLIED**

Do not surface it as a fresh application opportunity.

---

# 4. PROMPT 1 — LINKEDIN JOBS VIA APIFY

## Use

Run daily in a **new Claude Desktop chat**.

Attach:
- `PROJECT-CONTEXT-linkedin-job-market.md`
- `MASTER-JOB-TRACKER.csv` if the Google Sheet is not directly accessible

## Copy-paste prompt

```text
Read the attached PROJECT-CONTEXT file first.

This is a NEW independent daily job-search run.
Do not mix old datasets, old run IDs, old counts, or previous job results into today's data.

Use the existing Apify integration and the verified Actor:

curious_coder/linkedin-jobs-scraper

==================================================
MASTER JOB TRACKER
==================================================

Before classifying today's LinkedIn jobs, read the MASTER JOB TRACKER if available.

Compare today's jobs against it using, in order:

1. Job/requisition ID
2. Canonical LinkedIn / official job URL
3. Company + role + location

Classify each result as:

- NEW TODAY
- SEEN BEFORE
- ALREADY APPLIED
- SAME JOB - NEW SOURCE

Do not create duplicate opportunities.

Preserve First Found Date for existing jobs.
Update Last Seen Date when an existing job is seen again.
Never delete historical rows or overwrite unrelated rows.

==================================================
GOAL
==================================================

Find fresh LinkedIn jobs from the LAST 24 HOURS that genuinely match my React Native / Mobile Engineer profile.

MY PROFILE

- 3+ years professional React Native/mobile development experience
- React Native
- TypeScript
- JavaScript
- React.js
- Android + iOS cross-platform development
- REST APIs
- TanStack Query
- Zustand / Redux
- CI/CD
- Jest / testing
- debugging
- performance optimization
- authentication / SSO / RBAC
- offline-first mobile flows
- mobile releases
- Next.js/frontend experience as secondary
- Bengaluru based

Preferred experience range:
approximately 2–5 years.

Do not automatically reject a strong role just because it asks for 4+ years.

==================================================
SEARCH
==================================================

TIME WINDOW:
LAST 24 HOURS

LOCATION:
India

Use URL mode only.

Encode:
- location=India
- geoId=102713980
- LinkedIn LAST 24 HOURS filter

Search ALL of these query families:

1. "React Native"
2. "React Native Developer"
3. "React Native Engineer"
4. "Mobile Engineer React Native"
5. "Mobile Developer React Native"
6. "Cross Platform Mobile Developer"
7. "Software Engineer React Native"
8. "Software Developer React Native"
9. "SDE React Native"
10. "Application Developer React Native"
11. "Frontend Developer React Native"
12. "Frontend Engineer React Native"

Do not search only obvious React Native titles.

Hidden React Native roles are important.

Use a broad but cost-controlled result limit per query, preferably around 75.

scrapeCompany = false unless genuinely necessary.

IMPORTANT:

- Follow the URL-mode rules from PROJECT-CONTEXT.
- Deduplicate using LinkedIn job ID.
- Do not use inputUrl as proof of true query overlap.
- Do not stop after finding a few good jobs.
- If any query hits the configured result limit exactly, flag it as CAP HIT.
- If a query fails, report it.
- Do not run unrelated Actors.

==================================================
CAP RECOVERY
==================================================

If any search query reaches its configured result limit exactly, do not assume that query is complete.

Flag it as CAP HIT.

Then, if the estimated additional cost remains reasonable:

- rerun ONLY that capped search separately with a higher result limit
OR
- split that query into narrower location searches

Merge the additional results and deduplicate by LinkedIn job ID.

If additional execution would materially increase cost, stop and tell me exactly which query requires a follow-up run.

==================================================
ANALYSIS
==================================================

After collection, analyze ONLY today's dataset.

Classify every unique job as:

RN REQUIRED
React Native is explicitly required or clearly central.

RN STRONG
React Native is strongly relevant but another mobile technology may also be accepted.

RN OPTIONAL
React Native is preferred, nice-to-have, or one option among several.

NOT RN
React web only, Flutter-only, native-only Android/iOS, backend-only, QA-only, or otherwise not a genuine React Native role.

Deprioritize:

- Flutter-only roles
- native Android/Kotlin-only roles
- native iOS/Swift-only roles
- backend-heavy roles where RN is peripheral
- QA/SDET
- internships/fresher roles
- Senior/Lead/Architect roles clearly beyond my experience

==================================================
OUTPUT
==================================================

### BEST MATCHES

Company | Role | Location | Posted | Experience | RN Level | Discovery Status | Matching Skills | Main Gap/Risk | LinkedIn Job URL

### HIDDEN REACT NATIVE ROLES

Show strong roles where the title does NOT mention React Native but the JD clearly requires it.

### POSSIBLE MATCHES

Show RN-optional or slightly stretched roles worth reviewing.

### SKIP / FALSE POSITIVES

Only include misleading results worth noting.

==================================================
RUN REPORT
==================================================

Report:

- Actor run ID
- Dataset ID
- approximate cost
- raw jobs returned
- unique jobs analyzed
- NEW TODAY count
- SEEN BEFORE count
- ALREADY APPLIED count
- RN REQUIRED count
- RN STRONG count
- RN OPTIONAL count
- NOT RN count
- hidden-title RN count
- failed queries
- queries that hit the result cap

Do not claim the search is exhaustive if any query failed or hit a cap.

==================================================
CSV
==================================================

Select the best 10–15 jobs for manual review.

Export:

react-native-jobs-YYYY-MM-DD.csv

Include:

- Company
- Role
- Location
- Posted
- Experience
- RN Level
- Discovery Status
- Matching Skills
- Main Gap/Risk
- LinkedIn Job URL

Do not apply.
Do not message anyone.
Do not start unrelated searches.

Begin now.
```

---

# 5. PROMPT 3 — WHOLE INTERNET VIA WEB + APIFY

## Use

Run after Prompt 1.

Attach:
- today's Prompt 1 CSV
- Master Job Tracker
- optionally PROJECT-CONTEXT

## Copy-paste prompt

```text
Act as my broad internet job-search research assistant.

Prompt 1 already searched LinkedIn through Apify.

Your goal now is to search the WIDER INTERNET using:

1. Web search for discovery and verification
2. Apify for structured/bulk extraction when a suitable reliable Actor exists

The main goal is to find NEW opportunities that were NOT already found in my attached LinkedIn/Apify CSV or MASTER JOB TRACKER.

Do not apply.
Do not create accounts.
Do not send messages.
Do not contact recruiters.
Do not edit profiles.
Do not invent information.

==================================================
READ ATTACHMENTS FIRST
==================================================

Read:

1. today's Prompt 1 CSV
2. MASTER JOB TRACKER
3. PROJECT-CONTEXT if attached

Do not re-run the LinkedIn Jobs Actor used by Prompt 1 unless I explicitly ask.

==================================================
DEDUPLICATION
==================================================

Compare every discovery against:

1. today's Prompt 1 CSV
2. MASTER JOB TRACKER

Classify each job as:

- NEW NON-LINKEDIN FIND
- SEEN BEFORE
- SAME JOB - NEW SOURCE
- ALREADY APPLIED

A job already present in either source is not a new opportunity.

Prefer the original company/ATS URL when a better source is discovered.

Do not create a second tracker row for the same job.

==================================================
MY PROFILE
==================================================

- 3+ years React Native/mobile development
- React Native
- TypeScript
- JavaScript
- React.js
- Android + iOS
- REST APIs
- TanStack Query
- Zustand / Redux
- CI/CD
- Jest / testing
- debugging
- performance optimization
- authentication / SSO / RBAC
- offline-first mobile flows
- mobile release experience
- Next.js/frontend experience as secondary
- Bengaluru based

Preferred experience:
approximately 2–5 years.

Do not automatically reject a strong role because it asks for 4+ years.

==================================================
SEARCH WINDOW
==================================================

PRIMARY WINDOW:
LAST 24 HOURS

If a source does not expose an exact date/time:

- do not invent one
- mark it as Date not verified
- include only if there is reasonable evidence it is active/recent

==================================================
LOCATION
==================================================

Search India broadly, especially:

- Bengaluru / Bangalore
- Hyderabad
- Pune
- Gurugram / Gurgaon
- Delhi NCR
- Noida
- Chennai
- Mumbai
- Remote India

==================================================
SEARCH SOURCES
==================================================

Search:

1. Official company career pages

2. ATS platforms:
- Greenhouse
- Lever
- Ashby
- Workday
- SmartRecruiters
- Darwinbox
- SuccessFactors
- Oracle Careers
- Taleo
- iCIMS
- Jobvite
- other legitimate ATSs discovered

3. Job platforms where accessible:
- Naukri
- Indeed
- Foundit
- Instahyre
- Cutshort
- Hirist
- Wellfound
- Glassdoor
- other credible engineering portals

4. Startup/product-company career pages

5. Search-engine results for relevant jobs

6. Secondary public sources when useful:
- X / Twitter
- Reddit
- public startup/community job boards
- public engineering hiring communities

Treat secondary public sources as lower-confidence and try to verify jobs on official sources.

==================================================
SEARCH QUERIES
==================================================

Do not search only "React Native Developer".

Use combinations such as:

"React Native Developer" India
"React Native Engineer" India
"React Native" Bengaluru
"React Native" Hyderabad
"React Native" Pune
"React Native" Gurugram
"React Native" Chennai
"Mobile Engineer" "React Native" India
"Mobile Developer" "React Native" India
"Software Engineer" "React Native" India
"Software Developer" "React Native" India
"SDE" "React Native" India
"Application Developer" "React Native" India
"Frontend Engineer" "React Native" India
"Frontend Developer" "React Native" India

Also search ATS-specific patterns such as:

site:boards.greenhouse.io "React Native" India
site:jobs.lever.co "React Native" India
site:jobs.ashbyhq.com "React Native" India
site:myworkdayjobs.com "React Native" India

==================================================
APIFY SOURCE DISCOVERY
==================================================

Where web search reveals a source with many relevant jobs, check whether Apify has a reliable Actor for it.

Before using a new Actor:

1. inspect its description/input schema
2. confirm source support
3. check login/cookie requirements
4. check pricing
5. prefer public/no-login extraction
6. avoid unclear or poor-fit Actors

Target approximately <= $1 total for a normal daily Prompt 3 Apify run.

If continuing would likely exceed that, stop and ask me first.

Use Apify only where it materially improves coverage or structured extraction.

==================================================
RN CLASSIFICATION
==================================================

RN REQUIRED
React Native is clearly required/central.

RN STRONG
React Native is a major part of the role but another mobile stack may also be accepted.

RN OPTIONAL
React Native is preferred/nice-to-have/one alternative.

NOT RN
React web only, Flutter-only, native-only, backend-only, QA-only, etc.

Prioritize RN REQUIRED and RN STRONG.

Do not confuse React.js with React Native.

==================================================
FIT RULES
==================================================

Prefer:

- React Native
- TypeScript / JavaScript
- Android + iOS
- REST APIs
- CI/CD
- testing
- debugging
- performance optimization
- Redux / Zustand
- authentication
- app releases
- mobile architecture
- native modules
- cross-platform development

Secondary:
- React.js
- Next.js
- frontend engineering

Deprioritize:

- Flutter-only
- native Android/Kotlin-only
- native iOS/Swift-only
- backend-heavy where RN is peripheral
- QA/SDET
- fresher/internship
- Lead/Principal/Architect clearly beyond my experience
- deep Java/Spring/backend-primary
- stale/closed listings

==================================================
OUTPUT
==================================================

### 1. NEW HIGH-PRIORITY JOBS

Company | Role | Location | Posted | Experience | RN Level | Why It Matches | Main Gap/Risk | Source | Apply Link

### 2. HIDDEN REACT NATIVE JOBS

Company | Actual Title | Location | RN Level | Evidence | Source | Apply Link

### 3. OFFICIAL CAREER / ATS EXCLUSIVES

Company | Role | ATS/Career Source | Posted | Experience | RN Level | Apply Link

### 4. POSSIBLE MATCHES

Company | Role | Reason To Consider | Main Concern | Source | Link

### 5. DUPLICATES / ALREADY FOUND

Company | Role | Discovery Status | Prompt 3 Source | Existing Source | Preferred Apply Source

### 6. SKIP / FALSE POSITIVES

Keep concise.

### 7. SEARCH COVERAGE REPORT

WEB:
- queries completed
- sources used
- company career pages checked
- ATSs checked
- job portals checked
- approximate pages/listings reviewed

APIFY:
- Actors discovered
- Actors actually used
- reason each was selected
- run IDs
- dataset IDs
- results collected
- approximate cost
- failed attempts

RESULTS:
- total raw jobs
- unique jobs after internal dedup
- duplicates against Prompt 1
- duplicates against Master Tracker
- NEW NON-LINKEDIN FIND count
- RN REQUIRED
- RN STRONG
- RN OPTIONAL
- hidden-title RN
- official ATS/career exclusives

LIMITATIONS:
- blocked sites
- login-required sources
- inaccessible pages
- unverifiable dates
- incomplete searches
- caps/pagination limits

Do not claim you searched the entire internet.

==================================================
FINAL SHORTLIST
==================================================

Select the best 5–10 NEW jobs for today.

Export:

internet-react-native-jobs-YYYY-MM-DD.csv

Columns:

Company
Role
Location
Posted
Experience
RN Level
Discovery Status
Why It Matches
Main Gap/Risk
Source
Source Type
Official Apply URL
Job ID

Do not apply.

Begin now.
```

---

# 6. PROMPT 4 — LINKEDIN HIRING / RECRUITER POSTS

## Use

Use in Claude Chrome.

This searches **LinkedIn Posts**, not LinkedIn Jobs.

## Copy-paste prompt

```text
Act as my LinkedIn hiring-post search assistant.

GOAL:
Find fresh React Native / Mobile Engineer hiring opportunities posted on LinkedIn POSTS in the LAST 24 HOURS.

Prompt 1 already covers LinkedIn Jobs through Apify.

Your purpose here is to find:

- recruiter hiring posts
- employee referral posts
- hiring-manager posts
- send-resume / DM-me posts
- email-based opportunities
- hidden React Native roles that may not appear in LinkedIn Jobs

Do NOT:
- apply
- message
- connect
- comment
- edit my profile

Research only.

==================================================
MASTER TRACKER CHECK
==================================================

Before calling an opportunity NEW TODAY, compare the underlying job against the MASTER JOB TRACKER if available.

Match using:

1. job/requisition ID
2. application URL
3. company + role + location

If the job already exists but this is a new recruiter/referral post:

Discovery Status = NEW POST FOR EXISTING JOB

Do not count it as a new job.

If useful, update the existing tracker row with:

- recruiter name
- recruiter contact
- referral opportunity
- public email
- LinkedIn post URL
- Last Seen Date

Never overwrite unrelated rows.

==================================================
MY PROFILE
==================================================

- 3+ years React Native/mobile development
- React Native
- TypeScript
- JavaScript
- React.js
- Android + iOS
- REST APIs
- TanStack Query
- Zustand / Redux
- CI/CD
- Jest/testing
- debugging
- performance optimization
- authentication / SSO / RBAC
- offline-first mobile flows
- mobile releases
- Bengaluru based

Preferred experience:
approximately 2–5 years.

Search India broadly, especially:

Bengaluru, Hyderabad, Pune, Gurugram/Gurgaon,
Delhi NCR, Noida, Chennai, Mumbai and Remote India.

==================================================
STRICT FRESHNESS RULE
==================================================

Prioritize posts genuinely published within the LAST 24 HOURS.

Do NOT treat a post as new just because:

- someone reposted an old post today
- an old post got a new comment
- LinkedIn resurfaced it
- an old vacancy was reshared without proof it is still active

If freshness cannot be verified:

FRESHNESS UNVERIFIED

Do not place it in the top-priority list.

==================================================
SEARCH IN 3 GROUPS
==================================================

GROUP 1 — DIRECT REACT NATIVE

1. "React Native hiring"
2. "hiring React Native developer"
3. "hiring React Native engineer"
4. "React Native opening"
5. "React Native vacancy"
6. "React Native immediate joiner"
7. "React Native jobs India"

GROUP 2 — HIDDEN ROLE TITLES

1. "Mobile Engineer React Native"
2. "Mobile Developer React Native"
3. "Software Engineer React Native"
4. "Software Developer React Native"
5. "SDE React Native"
6. "Application Developer React Native"
7. "Frontend Engineer React Native"
8. "Frontend Developer React Native"

Only include hidden-title roles when the actual post/JD contains meaningful React Native evidence.

GROUP 3 — RECRUITER / REFERRAL

1. "React Native referral"
2. "React Native send resume"
3. "React Native DM"
4. "React Native hiring Bengaluru"
5. "React Native hiring Hyderabad"
6. "React Native hiring Pune"
7. "React Native hiring Gurugram"
8. "React Native Remote India"

Follow useful variations when likely to surface additional genuine hiring posts.

==================================================
SCROLLING RULE
==================================================

For EACH query:

1. Use LinkedIn Posts search.
2. Prefer Latest / Recent where available.
3. Inspect more than the first visible results.
4. Continue scrolling/loading.
5. Keep collecting unique last-24-hour posts.

Stop only when one occurs:

A. 3 consecutive loads/screens contain no new relevant recent posts.
B. LinkedIn stops loading more.
C. Results clearly move outside the 24-hour window.
D. Browser/tool limits prevent further progress.

Record the stop reason.

Do not stop simply because a few good posts were found.

==================================================
REAL HIRING EVIDENCE
==================================================

Include posts with:

- explicit hiring/opening/vacancy language
- identifiable company
- identifiable role
- React Native requirement
- experience requirement
- skills/JD
- application/career link
- recruiter/hiring manager
- public email
- send resume
- DM invitation
- referral invitation
- immediate joiner requirement

Exclude:

- tutorials
- courses
- generic tech discussions
- candidate Open-to-Work posts
- motivational content
- vague "we're growing" posts
- no identifiable job
- stale opening
- spam

==================================================
REPOST / DUPLICATE HANDLING
==================================================

Do not count several posts about the same vacancy as different jobs.

Treat as one opportunity when they share:

- company
- role
- location
- requisition/application link
- materially same JD

Prefer the post with:

1. original recruiter/hiring manager
2. direct application link
3. public email
4. referral instructions
5. clearest JD

Classify reposts as:

- ORIGINAL
- REPOST
- SAME HIRING CAMPAIGN
- RESURFACED / OLDER OPENING

==================================================
RN CLASSIFICATION
==================================================

RN REQUIRED
React Native is clearly required/central.

RN STRONG
React Native is strongly relevant but another mobile stack may also be accepted.

RN OPTIONAL
React Native is preferred/nice-to-have/one option.

NOT RN
React.js only, Flutter-only, native-only, backend-only, QA-only, etc.

Prioritize RN REQUIRED and RN STRONG.

==================================================
OUTPUT
==================================================

### 1. NEW HIGH-PRIORITY HIRING POSTS

Company | Role | Location | Experience | Poster | Posted | RN Level | Discovery Status | Why It Matches | Contact | Post Link | Recommended Action

### 2. REFERRAL / DM / EMAIL LEADS

Company | Role | Person | Invitation | Email/Contact | Post Link

### 3. HIDDEN REACT NATIVE ROLES

Company | Actual Title | RN Evidence | Poster | Posted | Post Link

### 4. REPOSTED / SAME HIRING CAMPAIGN

Company | Role | Number of Posts Found | Best/Original Post | Other Useful Contacts

### 5. FRESHNESS UNVERIFIED / POSSIBLE

Keep separate.

### 6. SKIP / FALSE POSITIVES

Keep concise.

### 7. SEARCH COVERAGE REPORT

For every query report:

Query | Completed? | Approx Posts Inspected | Stop Reason

Also report:

- total queries attempted
- fully completed queries
- partially completed queries
- approximate raw posts inspected
- genuine hiring posts
- duplicate/repost posts collapsed
- unique hiring opportunities
- NEW TODAY
- NEW POST FOR EXISTING JOB
- RN REQUIRED
- RN STRONG
- hidden-title RN
- referral/DM/email leads
- freshness-unverified
- browser/LinkedIn limitations

Do not claim exhaustive coverage unless every relevant query was genuinely completed.

==================================================
FINAL ACTION LIST
==================================================

Finish with the best 5–10 genuinely NEW opportunities worth checking today.

Company | Role | Person | Why It Is Worth Checking | Best Next Action | Post Link

Do not take any action.

Begin with GROUP 1 and continue automatically through GROUP 2 and GROUP 3.
```

---

# 7. PROMPT 2 — DEEP-CHECK ONE SPECIFIC JOB

## Use

Use only when a job is:
- high-value
- unclear
- oddly titled
- borderline on experience
- worth recruiter/referral research

Open the job in Claude Chrome.

## Copy-paste prompt

```text
Inspect this job using my logged-in browser session.

Do NOT:
- apply
- message anyone
- connect/follow
- edit my profile

Inspection only.

==================================================
JOB
==================================================

[PASTE JOB LINK HERE]

==================================================
MY PROFILE
==================================================

- 3+ years React Native/mobile experience
- React Native
- TypeScript
- JavaScript
- React.js
- Android/iOS cross-platform development
- REST APIs
- TanStack Query
- Zustand/Redux
- CI/CD
- Jest/testing
- debugging
- performance optimization
- authentication/SSO/RBAC
- offline-first flows
- mobile releases
- Next.js/frontend as secondary

==================================================
VERIFY
==================================================

1. Is the job still open?
2. What is the exact current JD?
3. What experience is required?
4. Is React Native genuinely central?
5. Which skills are REQUIRED?
6. Which are nice-to-have?
7. What matches my profile?
8. What are the main gaps/risks?
9. Is a recruiter/job poster visible?
10. If visible, what is their name/profile?
11. Is it Easy Apply or external?
12. Is referral/recruiter outreach useful?
13. Does anything differ from the discovery source?

==================================================
CLASSIFY
==================================================

Use one:

- APPLY NOW
- APPLY + REFERRAL
- RECRUITER OUTREACH
- POSSIBLE
- SKIP

Do not use artificial percentage match scores.

Explain briefly.

==================================================
TRACKER UPDATE
==================================================

If this job exists in the MASTER JOB TRACKER, update only this job's row with newly verified information such as:

- open/closed status
- experience requirement
- official apply URL
- recruiter
- referral availability
- application status
- Last Seen Date

Do not modify unrelated rows.

Do not take any action.
```

---

# 8. DAILY OPERATING FLOW

### Step 1 — Prompt 1
LinkedIn Jobs via Apify.

Output:
- LinkedIn shortlist CSV
- run report
- NEW / SEEN / ALREADY APPLIED classification

### Step 2 — Prompt 3
Whole internet via Web + Apify.

Attach:
- Prompt 1 CSV
- Master Tracker

Output:
- new non-LinkedIn jobs
- official ATS/career exclusives
- duplicates
- internet shortlist CSV

### Step 3 — Prompt 4
LinkedIn hiring/recruiter/referral posts via Claude Chrome.

Output:
- fresh hiring posts
- referral/DM/email leads
- hidden RN roles
- recruiter contacts

### Step 4 — Prompt 2
Use only for specific jobs needing deeper verification.

### Step 5 — Update tracker
When you apply:
- Application Status = Applied
- Applied Date = actual date
- Next Action updated
- Referral Status updated if applicable

---

# 9. WEEKLY SAFETY SWEEP

Once per week:

Run Prompts 1, 3 and 4 with:

**LAST 7 DAYS**

instead of:

**LAST 24 HOURS**

Deduplicate against the Master Tracker.

Purpose:
- catch ranking misses
- catch failed/capped daily queries
- catch delayed indexing
- catch jobs posted between runs
- catch recruiter posts missed because scrolling stopped early

---

# 10. SYSTEM RULES

1. No source is assumed exhaustive.
2. Official company/ATS pages are preferred over aggregators.
3. React Native relevance must come from the actual JD/post, not just the title.
4. React.js does not equal React Native.
5. Do not automatically reject strong roles only because they ask for 4+ years.
6. Do not inflate counts with reposts or duplicate sources.
7. A new post is not automatically a new job.
8. A new source is not automatically a new job.
9. One real opportunity = one tracker row.
10. Preserve First Found Date.
11. Update Last Seen Date when rediscovered.
12. Do not overwrite unrelated tracker rows.
13. Do not automatically apply/message/connect.
14. Report search/tool limitations honestly.
15. Use the weekly 7-day sweep as the safety net.

---

# 11. WHAT TO ATTACH WHERE

### Prompt 1
Attach:
- PROJECT-CONTEXT
- Master Job Tracker if not directly connected

### Prompt 3
Attach:
- today's Prompt 1 CSV
- Master Job Tracker
- PROJECT-CONTEXT optionally

### Prompt 4
Use Claude Chrome.
Make the Master Tracker available if possible.

### Prompt 2
Open the individual job page in Claude Chrome.
Use the Master Tracker if available.

---

# 12. DAILY CHECKLIST

- [ ] Prompt 1 completed
- [ ] Cap/failure report checked
- [ ] Prompt 3 completed
- [ ] Prompt 3 deduped against Prompt 1 + Master Tracker
- [ ] Prompt 4 completed or limitations recorded
- [ ] Best new jobs manually reviewed
- [ ] Prompt 2 used for unclear/high-value jobs
- [ ] Applied jobs updated in Master Tracker
- [ ] Recruiter/referral details saved
- [ ] No duplicate rows created

---

# FINAL PIPELINE

**MASTER TRACKER → P1 LinkedIn Jobs → P3 Whole Internet → P4 LinkedIn Hiring Posts → P2 Specific Verification → Apply Manually → Update Tracker**

This is the canonical daily workflow.
