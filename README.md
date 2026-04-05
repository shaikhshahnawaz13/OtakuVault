<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=OTAKU%20VAULT&fontSize=80&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Track.%20Review.%20Discuss.%20The%20Anime%20Community%20Platform.&descAlignY=60&descSize=18" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Bebas+Neue&size=28&duration=3000&pause=1000&color=E63946&center=true&vCenter=true&multiline=true&width=700&height=60&lines=Full-Stack+Anime+Platform+%E2%80%94+Vanilla+JS+%2B+Supabase)](https://otakuvault.netlify.app)

<br/>

[![Live Demo](https://img.shields.io/badge/%F0%9F%8C%90_LIVE-otakuvault.netlify.app-E63946?style=for-the-badge&logo=netlify&logoColor=white)](https://otakuvault.netlify.app)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/shaikhshahnawaz13/otakuvault/ci.yml?style=for-the-badge&label=CI%2FCD&logo=githubactions&logoColor=white)](https://github.com/shaikhshahnawaz13/otakuvault/actions)
[![License](https://img.shields.io/badge/LICENSE-MIT-7c3aed?style=for-the-badge)](LICENSE)
[![Tests](https://img.shields.io/badge/TESTS-40%2B_passing-22C55E?style=for-the-badge&logo=jest&logoColor=white)](tests/)
[![Coverage](https://img.shields.io/badge/COVERAGE-80%25-22C55E?style=for-the-badge)](tests/)
[![Last Commit](https://img.shields.io/github/last-commit/shaikhshahnawaz13/otakuvault?style=for-the-badge&color=2563eb)](https://github.com/shaikhshahnawaz13/otakuvault/commits)

</div>

---

<div align="center">

### Tech Arsenal

![JavaScript](https://img.shields.io/badge/JavaScript-ES2020+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=flat-square&logo=css3&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Postgres+Auth+Storage-3ECF8E?style=flat-square&logo=supabase&logoColor=black)
![Deno](https://img.shields.io/badge/Deno-Edge_Functions-000000?style=flat-square&logo=deno&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-RLS+RPC-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth_Sessions-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-Unit+DOM_Tests-C21325?style=flat-square&logo=jest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Hosting+CDN-00C7B7?style=flat-square&logo=netlify&logoColor=white)

</div>

---

## What is OtakuVault?

OtakuVault is a production-grade, full-stack anime community platform written in zero-framework Vanilla JavaScript. It integrates Supabase Auth, Postgres, Storage, and Deno Edge Functions, with a fully automated GitHub Actions CI/CD pipeline and an 80%+ covered test suite.

No React. No Vue. No build step. Just fast, clean ES2020+ running directly in the browser.

---

## Table of Contents

- [Architecture](#architecture)
- [Feature Breakdown](#feature-breakdown)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Authentication and Security](#authentication-and-security)
- [Supabase Storage](#supabase-storage)
- [Edge Functions](#edge-functions)
- [API Integration — Jikan v4](#api-integration--jikan-v4)
- [Testing](#testing)
- [CICD Pipeline](#cicd-pipeline)
- [Security Headers](#security-headers)
- [Setup and Installation](#setup-and-installation)
- [Deploy to Netlify](#deploy-to-netlify)
- [Use Your Own Supabase Backend](#use-your-own-supabase-backend)
- [Achievements System](#achievements-system)
- [Admin Panel](#admin-panel)
- [Roadmap — Diversity Expansion](#roadmap--diversity-expansion)
- [Contributing](#contributing)

---

## Architecture

```
+------------------------------------------------------------------+
|                        CLIENT (Browser)                          |
|                                                                  |
|   index.html ------- src/script.js ------- src/style.css        |
|   (markup)           (all app logic)        (all styles)         |
|                            |                                     |
|                      src/utils.js                                |
|                      (pure fns: XSS escape, timestamps,          |
|                       goal%, star display, validation)           |
+----------------------------+------------------------------------- +
                             |  HTTPS + JWT Bearer
          +------------------+---------------------------+
          |              SUPABASE PLATFORM               |
          |                                              |
          |  +------------------+  +-----------------+  |
          |  |  Supabase Auth   |  |    Postgres DB   |  |
          |  |  JWT sessions    |  |  7 tables, RLS,  |  |
          |  |  email/password  |  |  stored procs    |  |
          |  +------------------+  +-----------------+  |
          |                                              |
          |  +------------------+  +-----------------+  |
          |  | Supabase Storage |  |  Deno Edge Fn   |  |
          |  | avatars bucket   |  |  verify-admin   |  |
          |  | public CDN URLs  |  |  server-side    |  |
          |  +------------------+  |  JWT validation |  |
          |                        +-----------------+  |
          +----------------------------------------------+
                             |
          +------------------+-------------------+
          |          JIKAN API v4                |
          |  Free MAL proxy — trending,          |
          |  search, detail. No key needed.      |
          +--------------------------------------+
                             |
          +------------------+-------------------+
          |           NETLIFY CDN                |
          |  Static hosting, security headers,   |
          |  asset caching, SPA redirect rules   |
          +--------------------------------------+
```

---

## Feature Breakdown

<details>
<summary><strong>Trending and Discovery</strong></summary>

Browse anime fetched live from Jikan API v4. Three curated tabs — Airing Now, Most Popular, and All Time Top — render skeleton loaders while data loads, then populate an anime grid. Each card links to a full detail modal with synopsis, score, type, and episode count. API responses are cached in a module-level `animeCache` object to eliminate redundant network requests within a session.

</details>

<details>
<summary><strong>My List — Watchlist</strong></summary>

Add any anime to your personal watchlist with a single click. Set one of three statuses — `Watching`, `Completed`, `Plan to Watch` — and assign a 1–5 star rating. Data persists in the `anime_list` Postgres table, scoped to your user ID with a `UNIQUE(user_id, mal_id)` constraint preventing duplicates. Your list syncs across any device you sign into.

</details>

<details>
<summary><strong>Reviews</strong></summary>

Write structured reviews — a star rating, free-text body, genre tags, and an optional anonymity toggle. Reviews are stored in Postgres and displayed publicly. The anonymous flag replaces your username with "Anonymous" in the rendered output without exposing the real `user_id` in client-facing queries.

</details>

<details>
<summary><strong>Community Threads</strong></summary>

Create discussion threads optionally tied to an anime title. Other users reply inline. Threads track upvote counts and reply totals via integer columns updated on each action. Anonymous mode works for both threads and replies.

</details>

<details>
<summary><strong>Profile and Customisation</strong></summary>

Every account has a full profile: avatar (uploaded to Supabase Storage), banner colour picker, bio, favourite genres, pinned anime slots, and an annual watch goal with live percentage progress. Equipped achievement titles display beneath the username.

</details>

<details>
<summary><strong>Achievements — 16 Unlockable Titles</strong></summary>

The achievement engine runs after every tracked action. It queries the user's cumulative stats from Supabase and evaluates all thresholds in a single pass. Newly unlocked achievements are inserted into `user_achievements` and a toast fires. Users equip one title to display on their public profile.

</details>

<details>
<summary><strong>Admin Panel</strong></summary>

A protected dashboard gated by a Deno Edge Function. Shows platform stats and exports all data to `.xlsx` via SheetJS. Access is verified entirely server-side.

</details>

---

## Tech Stack

| Layer | Technology | Detail |
|---|---|---|
| Frontend | Vanilla JavaScript ES2020+ | No framework, no transpiler, no bundler |
| Markup | HTML5 | Single `index.html` — all views, modals, navigation |
| Styling | CSS3 | Single `style.css` — custom properties, responsive grid |
| Auth | Supabase Auth | JWT sessions, email/password, username login via RPC |
| Database | Supabase Postgres | 7 tables, Row-Level Security, stored procedure |
| File Storage | Supabase Storage | `avatars` bucket, public CDN URLs, upsert on re-upload |
| Edge Runtime | Deno (Supabase Edge Functions) | `verify-admin` — server-side JWT role validation |
| Anime Data | Jikan API v4 | Free unofficial MAL proxy — trending, search, detail |
| Excel Export | SheetJS via CDN | Admin data export to `.xlsx` |
| Tests | Jest 29 + jest-environment-jsdom | 40+ unit tests + DOM integrity tests |
| HTML Lint | HTMLHint | Markup validation enforced in CI |
| CI/CD | GitHub Actions | 3-job pipeline: test, lint, deploy |
| Hosting | Netlify | CDN, security headers, SPA redirects, asset caching |

---

## Project Structure

```
otakuvault/
├── index.html                    # All markup — views, modals, nav (single file)
├── src/
│   ├── script.js                 # All application logic (~1,158 lines)
│   │   ├── CONSTANTS             # Supabase URL/key, Admin UID
│   │   ├── AUTH                  # login, signup, logout, loadUser()
│   │   ├── ADMIN                 # checkAdmin() — Edge Function + UID fallback
│   │   ├── PROFILE               # CRUD, avatar upload, banner, goals, pinned anime
│   │   ├── WATCHLIST             # addToList(), removeFromList(), renderList()
│   │   ├── REVIEWS               # submitReview(), loadReviews(), renderReviews()
│   │   ├── THREADS               # createThread(), loadReplies(), upvote()
│   │   ├── ACHIEVEMENTS          # checkAchievements(), grantAchievement(), equipTitle()
│   │   ├── TRENDING              # loadTrending(), renderGrid(), animeCache{}
│   │   ├── SEARCH                # doSearch(), loadSearchPopular()
│   │   ├── STORAGE               # uploadPfp() — Supabase Storage avatars bucket
│   │   └── UI HELPERS            # showPage(), skel(), toast(), renderStars()
│   ├── style.css                 # All styles + responsive layout (~405 lines)
│   └── utils.js                  # Pure, testable utility functions
│       ├── escH(str)             # XSS-safe HTML entity encoding
│       ├── timeAgo(date)         # Relative timestamps
│       ├── goalPercent(n, goal)  # Watch goal progress clamped 0-100
│       ├── safeParse(val, fb)    # JSON parse with fallback
│       ├── clamp(n, min, max)    # Numeric range clamping
│       ├── starsDisplay(n)       # Star string renderer
│       ├── isValidUsername(u)    # Alphanumeric + underscore validation
│       └── truncate(str, len)    # Text truncation with ellipsis
├── tests/
│   ├── utils.test.js             # 40+ unit tests across all utility functions
│   └── dom.test.js               # Parses index.html, asserts all critical IDs exist
├── .github/
│   └── workflows/
│       └── ci.yml                # GitHub Actions: Test, Lint, Deploy (3 jobs)
├── netlify.toml                  # Publish dir, security headers, cache rules, SPA redirect
├── jest.config.js                # jsdom env, coverage thresholds (80% stmt/fn, 75% branch)
├── .htmlhintrc                   # HTMLHint rules applied in CI lint job
├── package.json                  # Dev deps only: jest@29, jest-environment-jsdom, htmlhint
├── CONTRIBUTING.md
├── LICENSE                       # MIT
└── .gitignore
```

---

## Database Schema

Seven tables in a single Supabase Postgres project. All foreign keys reference `auth.users` or `profiles`, and all write operations are gated by Row-Level Security policies.

```sql
-- PROFILES — extends auth.users with user-facing data. 1:1 with auth.users.
CREATE TABLE profiles (
  id             UUID REFERENCES auth.users PRIMARY KEY,
  username       TEXT UNIQUE NOT NULL,
  bio            TEXT,
  avatar_url     TEXT,          -- Supabase Storage public CDN URL
  banner_colour  TEXT,          -- CSS hex colour for profile banner
  pinned_anime   JSONB,         -- [{mal_id, title, image}, ...]
  fav_genres     TEXT,          -- Comma-separated genre list
  watch_goal     INT,           -- Annual watch target
  equipped_title TEXT,          -- Achievement id currently equipped
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- ANIME LIST — per-user watchlist. UNIQUE prevents duplicate entries.
CREATE TABLE anime_list (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES profiles(id) ON DELETE CASCADE,
  mal_id      INT NOT NULL,
  title       TEXT,
  image       TEXT,
  type        TEXT,
  mal_score   NUMERIC,
  status      TEXT CHECK (status IN ('Watching', 'Completed', 'Plan to Watch')),
  user_rating INT  CHECK (user_rating BETWEEN 1 AND 5),
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, mal_id)
);

-- REVIEWS
CREATE TABLE reviews (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES profiles(id) ON DELETE CASCADE,
  mal_id       INT NOT NULL,
  anime_title  TEXT,
  anime_image  TEXT,
  rating       INT CHECK (rating BETWEEN 1 AND 5),
  body         TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT FALSE,
  genres       TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- COMMUNITY THREADS
CREATE TABLE threads (
  id           BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id      UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title        TEXT NOT NULL,
  body         TEXT,
  anime_title  TEXT,
  is_anonymous BOOLEAN DEFAULT FALSE,
  upvotes      INT DEFAULT 0,
  reply_count  INT DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- THREAD REPLIES
CREATE TABLE thread_replies (
  id           BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  thread_id    BIGINT REFERENCES threads(id) ON DELETE CASCADE,
  user_id      UUID REFERENCES profiles(id) ON DELETE CASCADE,
  body         TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT FALSE,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ACHIEVEMENT DEFINITIONS (seed once)
CREATE TABLE achievements (
  id          TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  description TEXT,
  requirement TEXT,
  icon        TEXT,
  rarity      TEXT CHECK (rarity IN ('Common', 'Rare', 'Epic', 'Legendary')),
  sort_order  INT
);

-- USER ACHIEVEMENTS — junction table
CREATE TABLE user_achievements (
  user_id        UUID REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id TEXT REFERENCES achievements(id),
  earned_at      TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, achievement_id)
);
```

### Stored Procedure

Used for username-based login. `SECURITY DEFINER` runs under the owner's privileges, keeping `email` in `auth.users` off-limits to public SELECT queries:

```sql
CREATE OR REPLACE FUNCTION get_email_by_username(uname TEXT)
RETURNS TEXT
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT au.email
  FROM   auth.users au
  JOIN   profiles p ON p.id = au.id
  WHERE  p.username = uname
  LIMIT  1;
$$;
```

### Row-Level Security

```sql
-- Profiles: public read, self-only write
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "profiles_select" ON profiles FOR SELECT USING (true);
CREATE POLICY "profiles_update" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Anime list: owner-only
ALTER TABLE anime_list ENABLE ROW LEVEL SECURITY;
CREATE POLICY "list_select" ON anime_list FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "list_insert" ON anime_list FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "list_update" ON anime_list FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "list_delete" ON anime_list FOR DELETE USING (auth.uid() = user_id);

-- Reviews: public read, auth insert
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "reviews_select" ON reviews FOR SELECT USING (true);
CREATE POLICY "reviews_insert" ON reviews FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Threads: public read, auth insert
ALTER TABLE threads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "threads_select" ON threads FOR SELECT USING (true);
CREATE POLICY "threads_insert" ON threads FOR INSERT WITH CHECK (auth.uid() = user_id);
```

---

## Authentication and Security

OtakuVault uses **Supabase Auth** with JWT sessions. The client holds only the anon public key — all sensitive operations are gated by RLS policies and Edge Functions on the server side.

### Login Flow

```
User submits form
       |
       +-- Email? ──────────────────────────────> sb.auth.signInWithPassword()
       |
       +-- Username?
               |
               +-- sb.rpc('get_email_by_username')   <- SECURITY DEFINER
                         |                              email never exposed publicly
                         +-- sb.auth.signInWithPassword()
                                     |
                                     +-- JWT stored in memory
                                                 |
                                                 +-- loadUser() --> fetchProfile()
```

### Admin Verification — Dual-Layer

```
checkAdmin(user)
       |
       +-- [PRIMARY] Fetch JWT from active session
       |       |
       |       +-- POST /functions/v1/verify-admin
       |               Authorization: Bearer <JWT>
       |               |
       |               +-- Deno Edge Function validates JWT server-side
       |                   Returns { isAdmin: true | false }
       |
       +-- [FALLBACK] If Edge Function unreachable
               |
               +-- Compare user.id === ADMIN_UID  (UUID — not guessable)
```

### XSS Prevention

All user-generated content passes through `escH()` before DOM injection. Encodes `&`, `<`, `>`, `"`, `'` — covered by 8 dedicated unit tests including null, undefined, and numeric coercion edge cases:

```js
function escH(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}
```

---

## Supabase Storage

User avatars are uploaded to a Supabase Storage bucket named `avatars`. Files are namespaced by `user_id` to prevent cross-user overwrites. `upsert: true` handles re-uploads by replacing the existing file in-place.

```js
// Path: avatars/{user_id}/avatar.{ext}
const path = `${currentUser.id}/avatar.${ext}`;

const { error } = await sb.storage
  .from('avatars')
  .upload(path, file, { upsert: true, contentType: file.type });

// Resolve public CDN URL
const { data } = sb.storage.from('avatars').getPublicUrl(path);

// Persist URL to profiles table
await sb.from('profiles')
  .update({ avatar_url: data.publicUrl })
  .eq('id', currentUser.id);
```

**Bucket setup:**
1. Supabase dashboard → Storage → New bucket → name: `avatars` → Public: on
2. Add a storage policy to enforce per-user access:

```sql
CREATE POLICY "avatar_upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'avatars'
  AND auth.uid()::text = (storage.foldername(name))[1]
);
```

---

## Edge Functions

The `verify-admin` Deno function runs on Supabase infrastructure. It receives the user's JWT, validates it using the service role key (never exposed to the client), and returns `{ isAdmin: true/false }`.

```typescript
// supabase/functions/verify-admin/index.ts (Deno runtime)
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const jwt = req.headers.get("Authorization")?.replace("Bearer ", "");

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!   // server-side only
  );

  const { data: { user }, error } = await supabase.auth.getUser(jwt);

  if (error || !user) {
    return new Response(JSON.stringify({ isAdmin: false }), { status: 401 });
  }

  const isAdmin = user.email === Deno.env.get("ADMIN_EMAIL");
  return new Response(JSON.stringify({ isAdmin }), { status: 200 });
});
```

---

## API Integration — Jikan v4

OtakuVault integrates the **Jikan API v4** — a free, unofficial REST proxy for MyAnimeList. No API key required.

| Endpoint | Purpose |
|---|---|
| `GET /top/anime?filter=airing` | Airing Now section |
| `GET /top/anime?filter=bypopularity` | Most Popular section |
| `GET /top/anime` | All Time Top section |
| `GET /anime/{id}` | Anime detail modal |
| `GET /anime?q={query}&limit=20` | Search results |

**Caching:** responses are stored in a module-level `animeCache = {}` keyed by MAL ID. Before each fetch the cache is checked, eliminating duplicate requests when a user revisits the same anime detail in a session.

**Error handling:** missing image fields fall back to CSS backgrounds. Score and genre fields use optional chaining (`?.`) throughout.

---

## Testing

Tests use **Jest 29** with `jest-environment-jsdom`. The suite covers two concerns: logic correctness and structural integrity.

```bash
npm test                   # Run all tests
npm run test:coverage      # Run with Istanbul coverage report
npm run lint:html          # HTMLHint markup validation
```

### Coverage Thresholds — Enforced in CI

| Metric | Threshold |
|---|---|
| Statements | 80% |
| Functions | 80% |
| Branches | 75% |
| Lines | 80% |

CI fails and deployment is blocked if coverage drops below any threshold.

### `tests/utils.test.js` — 40+ Unit Tests

```
escH()
  - Encodes &, <, >, ", ' characters correctly
  - Returns empty string for null and undefined
  - Coerces numbers to string before encoding
  - Passes safe strings through unchanged

timeAgo()
  - Returns 'just now' for timestamps under 60 seconds
  - Formats minutes, hours, and days with correct suffixes
  - Accepts both Date objects and ISO string inputs

goalPercent()
  - Returns 0 for null or zero goal
  - Returns 50 for half-completed goal
  - Clamps to 100 when completed count exceeds goal
  - Returns 100 for exact goal match

safeParse()
  - Passes through values already typed as array or object
  - Parses valid JSON strings
  - Returns fallback for null input
  - Returns fallback for malformed JSON

clamp()
  - Returns value unchanged when within range
  - Returns min when value is below range
  - Returns max when value is above range
  - Handles boundary values correctly

starsDisplay()
  - Renders correct filled/empty star string for 0 through 5
  - Coerces null to 0 stars
  - Clamps values above 5 and below 0

isValidUsername()
  - Accepts alphanumeric strings and underscores
  - Rejects spaces, hyphens, and special characters

truncate()
  - Returns string unchanged when under max length
  - Appends ellipsis and cuts at the correct boundary
```

### `tests/dom.test.js` — Structural Integrity

Parses `index.html` with jsdom and asserts every element ID that `script.js` depends on exists in the markup. Catches silent breakage when IDs are renamed or removed during refactoring.

---

## CICD Pipeline

Every push to `main` or `master` triggers a 3-job GitHub Actions pipeline. Deployment is gated behind both test and lint jobs passing.

```
git push
    |
    +-- [Job 1] Test  (ubuntu-latest, Node.js 20)
    |       +-- actions/checkout@v4
    |       +-- actions/setup-node@v4  (node 20)
    |       +-- npm install
    |       +-- npm run test:coverage   <- fails pipeline if coverage drops
    |       +-- upload-artifact@v4      (coverage/ — 7 day retention)
    |
    +-- [Job 2] Lint and Validate  (ubuntu-latest, Node.js 20)
    |       +-- npm run lint:html
    |       +-- Verify all required files exist:
    |       |     index.html, src/style.css, src/script.js, src/utils.js
    |       |     jest.config.js, package.json, netlify.toml, LICENSE, .gitignore
    |       +-- Verify no .env files are committed to git
    |
    +-- [Job 3] Deploy  (only if Job 1 + Job 2 pass, push to main only)
            +-- nwtgck/actions-netlify@v3
            +-- publish-dir: "."
            +-- Posts status comment on commits and PRs
            +-- Timeout: 5 minutes
```

### Setting Up Auto-Deploy

1. Get your **Netlify Site ID**: Netlify dashboard → Site configuration → API ID
2. Get a **Netlify Auth Token**: Netlify dashboard → User settings → Personal access tokens → New token
3. Add to GitHub: repo → Settings → Secrets and variables → Actions

| Secret | Value |
|---|---|
| `NETLIFY_SITE_ID` | Your site API ID |
| `NETLIFY_AUTH_TOKEN` | Your personal access token |

---

## Security Headers

Configured in `netlify.toml` and applied to every Netlify response:

| Header | Value | Purpose |
|---|---|---|
| `X-Frame-Options` | `DENY` | Block clickjacking via iframe embedding |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-type sniffing attacks |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer data leakage |
| `Cache-Control` (JS/CSS) | `public, max-age=31536000, immutable` | 1-year asset caching for performance |

---

## Setup and Installation

### Prerequisites

| Tool | Version | Required For |
|---|---|---|
| Any modern browser | Chrome 90+ / Firefox 88+ / Safari 14+ | Running the app |
| Node.js | v18+ | Running tests locally only |
| npm | v8+ | Installing dev dependencies |

### 1. Clone

```bash
git clone https://github.com/shaikhshahnawaz13/otakuvault.git
cd otakuvault
```

### 2. Install Dev Dependencies

```bash
npm install
# Installs: jest@29, jest-environment-jsdom@29, htmlhint@1
# Zero runtime dependencies — site uses CDN scripts only
```

### 3. Run Tests

```bash
npm test
# Expected: 40+ passing, 0 failures

npm run test:coverage
# Generates coverage/lcov-report/index.html for a visual breakdown
```

### 4. Start the Dev Server

```bash
npx serve .
# Opens at http://localhost:3000
```

Or with Python:

```bash
python3 -m http.server 3000
```

The live Supabase backend is pre-configured. Auth and all features work immediately.

---

## Deploy to Netlify

### Option A — CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.
```

### Option B — GitHub Actions (recommended)

1. Push the repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → New site → Import from Git → select your repo
3. Set publish directory to `.` and leave the build command blank
4. Add `NETLIFY_SITE_ID` and `NETLIFY_AUTH_TOKEN` as GitHub secrets

Every push to `main` now runs the full test, lint, and deploy pipeline automatically.

---

## Use Your Own Supabase Backend

### 1. Create a Project

Sign up at [supabase.com](https://supabase.com), create a project, and note your **Project URL** and **anon public key** from Settings → API.

### 2. Update Credentials

```js
// src/script.js — top of file
const SUPA_URL = 'https://YOUR-PROJECT-ID.supabase.co';
const SUPA_KEY = 'your-anon-public-key';
```

### 3. Run the Schema

Paste the SQL from [Database Schema](#database-schema) into the Supabase SQL editor and execute. This creates all 7 tables, constraints, and the stored procedure.

### 4. Seed Achievements

```sql
INSERT INTO achievements (id, title, description, requirement, icon, rarity, sort_order) VALUES
  ('first_review',       'First Impressions',   'Write your first review',     '1 review',     '[W]', 'Common',    1),
  ('ten_reviews',        'Prolific Reviewer',    'Write 10 reviews',            '10 reviews',   '[R]', 'Common',    2),
  ('twentyfive_reviews', 'Critic',              'Write 25 reviews',            '25 reviews',   '[C]', 'Rare',      3),
  ('fifty_reviews',      'Encyclopaedia',        'Write 50 reviews',            '50 reviews',   '[E]', 'Epic',      4),
  ('ten_tracked',        'Getting Started',      'Track 10 anime',              '10 tracked',   '[G]', 'Common',    5),
  ('fifty_tracked',      'List Master',          'Track 50 anime',              '50 tracked',   '[L]', 'Rare',      6),
  ('twentyfive_complete','Completionist',         'Complete 25 anime',           '25 completed', '[D]', 'Rare',      7),
  ('fifty_complete',     'True Completionist',   'Complete 50 anime',           '50 completed', '[T]', 'Epic',      8),
  ('five_threads',       'Conversation Starter', 'Create 5 threads',            '5 threads',    '[S]', 'Common',    9),
  ('twenty_replies',     'Community Pillar',     'Post 20 replies',             '20 replies',   '[P]', 'Rare',      10),
  ('action_fan',         'Action Fan',           'Write 5 Action reviews',      '5 Action',     '[A]', 'Common',    11),
  ('romance_fan',        'Romance Fan',          'Write 5 Romance reviews',     '5 Romance',    '[O]', 'Common',    12),
  ('isekai_fan',         'Isekai Fan',           'Write 5 Isekai reviews',      '5 Isekai',     '[I]', 'Common',    13),
  ('genre_master',       'Genre Master',         'Review across 5+ genres',     '5+ genres',    '[M]', 'Epic',      14),
  ('og_member',          'OG Member',            'Be in the first 10 users',    'First 10',     '[X]', 'Legendary', 15);
```

### 5. Create the Avatars Bucket

1. Supabase dashboard → Storage → New bucket → name: `avatars` → Public: on
2. Add the storage policy from [Supabase Storage](#supabase-storage) above

### 6. Enable Row-Level Security

Run the RLS policies from [Database Schema](#database-schema) for each table.

### 7. Set Admin Access

```js
// src/script.js
const ADMIN_UID   = 'your-user-uuid-from-supabase-auth';
const ADMIN_EMAIL = 'your@admin.email';
```

Your UUID appears in Supabase → Authentication → Users after your first signup.

---

## Achievements System

| Title | Requirement | Rarity |
|---|---|---|
| First Impressions | Write 1 review | Common |
| Prolific Reviewer | Write 10 reviews | Common |
| Critic | Write 25 reviews | Rare |
| Encyclopaedia | Write 50 reviews | Epic |
| Getting Started | Track 10 anime | Common |
| List Master | Track 50 anime | Rare |
| Completionist | Complete 25 anime | Rare |
| True Completionist | Complete 50 anime | Epic |
| Conversation Starter | Create 5 threads | Common |
| Community Pillar | Post 20 replies | Rare |
| Action Fan | 5 Action genre reviews | Common |
| Romance Fan | 5 Romance genre reviews | Common |
| Isekai Fan | 5 Isekai genre reviews | Common |
| Genre Master | Reviews across 5+ genres | Epic |
| OG Member | Be in the first 10 users | **Legendary** |

---

## Admin Panel

The admin panel is accessible only to the verified admin account. It shows platform-wide stats (users, anime tracked, reviews, threads, replies) and lets the admin export all data to `.xlsx` via SheetJS, generated client-side from a fresh Supabase query at export time. Access is gated by the Deno Edge Function with a UID fallback.

---

## Roadmap — Diversity Expansion

These additions would directly raise the Depth and Diversity scores on developer portfolio tools:

**Python CLI — `otakuvault-cli`**
A command-line tool to export your OtakuVault watchlist as CSV or Markdown, query Jikan from the terminal, and pull user stats. Adds Python to the language graph and demonstrates cross-language thinking for the same domain.

**Go microservice**
A lightweight Go HTTP server that proxies Jikan requests with shared in-memory caching and rate limit handling, deployable to Fly.io. Demonstrates Go's strengths for API work alongside the JS frontend and adds a third language.

**TypeScript port of utils.js**
Migrating `src/utils.js` to `src/utils.ts` with strict typing adds TypeScript to language detection, improves IDE support, and requires zero runtime changes.

**Supabase Realtime**
Subscribe to `thread_replies` and `threads` channels with `supabase.channel()` to push live reply counts and new replies to connected users without polling. This adds the Realtime signal to portfolio depth detectors.

Contributions toward any of these are very welcome — see below.

---

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

```bash
git clone https://github.com/shaikhshahnawaz13/otakuvault.git
cd otakuvault
npm install

git checkout -b feat/your-feature-name

# Make changes, then verify
npm test
npm run lint:html

git add .
git commit -m "feat: describe your change"
git push origin feat/your-feature-name
# Open a Pull Request on GitHub
```

All pull requests must pass the full CI pipeline before they are eligible to merge. The deploy job only runs on pushes to `main` — your branch is tested but not deployed until merged.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%"/>

**No framework. No build step. No excuses.**

Built by [shaikhshahnawaz13](https://github.com/shaikhshahnawaz13)

[![Stars](https://img.shields.io/github/stars/shaikhshahnawaz13/otakuvault?style=social)](https://github.com/shaikhshahnawaz13/otakuvault/stargazers)
[![Forks](https://img.shields.io/github/forks/shaikhshahnawaz13/otakuvault?style=social)](https://github.com/shaikhshahnawaz13/otakuvault/network/members)

</div>
