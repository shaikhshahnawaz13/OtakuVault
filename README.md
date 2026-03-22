<div align="center">

<a href="https://otakuvault.netlify.app">
  <img src="https://readme-typing-svg.demolab.com?font=Bebas+Neue&size=72&duration=3000&pause=1000&color=E63946&center=true&vCenter=true&width=700&height=100&lines=OTAKU+VAULT;TRACK.+REVIEW.+DISCUSS.;THE+ANIME+COMMUNITY." alt="OtakuVault" />
</a>

<br/>

![Status](https://img.shields.io/badge/STATUS-LIVE-e63946?style=for-the-badge&logo=netlify&logoColor=white)
![License](https://img.shields.io/badge/LICENSE-MIT-7c3aed?style=for-the-badge)
![JS](https://img.shields.io/badge/VANILLA_JS-NO_FRAMEWORK-f4a261?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/SUPABASE-BACKEND-3ecf8e?style=for-the-badge&logo=supabase&logoColor=black)
![CI](https://img.shields.io/github/actions/workflow/status/shaikhshahnawaz13/otakuvault/ci.yml?style=for-the-badge&label=CI%2FCD&logo=githubactions&logoColor=white)
![Last Commit](https://img.shields.io/github/last-commit/shaikhshahnawaz13/otakuvault?style=for-the-badge&color=2563eb)

<br/>

> **OtakuVault** is a full-stack anime community platform — track what you're watching, rate and review anime, pin your favourites, earn achievements, and discuss with other otakus. No framework. No build step. Just fast, clean vanilla JavaScript.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_LIVE_DEMO-otakuvault.netlify.app-E63946?style=for-the-badge)](https://otakuvault.netlify.app)
&nbsp;
[![Bug Report](https://img.shields.io/badge/🐛_BUG-Open_Issue-7c3aed?style=for-the-badge)](https://github.com/shaikhshahnawaz13/otakuvault/issues/new)

</div>

---

## ⚡ Table of Contents

- [🌐 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Setup & Installation](#-setup--installation)
- [🧪 Running Tests](#-running-tests)
- [🤖 CI/CD Pipeline](#-cicd-pipeline)
- [🗄 Database Schema](#-database-schema)
- [🏆 Achievements](#-achievements)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🌐 Live Demo

**[https://otakuvault.netlify.app](https://otakuvault.netlify.app)**

Sign up with any email to explore the full platform — tracking, reviews, threads, achievements and profile customisation all work live.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔥 Trending | Browse Airing Now, Most Popular, All Time via Jikan API |
| 📋 My List | Track anime as Watching / Completed / Plan to Watch with star ratings |
| 💬 Threads | Community discussion threads with upvotes and anonymous replies |
| 👤 Profile | Avatar, banner colour, bio, pinned anime, yearly watching goal |
| 🏆 Achievements | 16 unlockable titles across 4 rarities with equip system |
| 🛡 Admin Panel | Stats dashboard + Excel export, secured via Supabase Edge Function |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript (ES2020+) — no framework, no build step |
| Auth & DB | [Supabase](https://supabase.com) — Postgres + auth + storage |
| Anime Data | [Jikan API v4](https://docs.api.jikan.moe) — free, no API key needed |
| Excel Export | [SheetJS](https://sheetjs.com) via CDN |
| Hosting | [Netlify](https://netlify.com) |
| Tests | Jest + jsdom |
| CI/CD | GitHub Actions → Netlify |

---

## 📁 Project Structure

```
otakuvault/
├── index.html                  # All markup
│   ├── script.js           # All app logic
├── src/
│   ├── style.css           # All styles + responsive layout
│   └── utils.js            # Pure utility functions (testable)
├── jest.config.js              # Jest config
├── tests/
│   ├── utils.test.js           # Unit tests
│   └── dom.test.js             # DOM integrity tests
├── .github/
│   └── workflows/
│       └── ci.yml              # Test → Lint → Deploy pipeline
├── netlify.toml                # Netlify config + security headers
├── .htmlhintrc                 # HTML lint rules
├── package.json
├── .gitignore
├── LICENSE
└── CONTRIBUTING.md
```

---

## 🚀 Setup & Installation

### Prerequisites

- Any modern browser
- [Node.js](https://nodejs.org) v18+ (for running tests locally only)

### 1. Clone

```bash
git clone https://github.com/shaikhshahnawaz13/otakuvault.git
cd otakuvault
```

### 2. Install dev dependencies

```bash
npm install
```

> Only installs test/lint tools. No runtime dependencies — the site uses CDN scripts.

### 3. Run locally

```bash
npx serve .
# Open http://localhost:3000
```

### 4. (Optional) Use your own Supabase backend

1. Create a free project at [supabase.com](https://supabase.com)
2. In `script.js`, replace the top two lines:

```js
const SUPA_URL = 'https://your-project.supabase.co';
const SUPA_KEY = 'your-anon-public-key';
```

3. Run the SQL schema (see [Database Schema](#-database-schema) below) in your Supabase SQL editor.

### 5. Deploy to Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.
```

---

## 🧪 Running Tests

```bash
npm test                  # all tests
npm run test:coverage     # with coverage report
npm run lint:html         # HTML lint
```

| File | What it covers |
|------|---------------|
| `tests/utils.test.js` | 40+ unit tests — escaping, timestamps, goal %, star display, username validation, truncation |
| `tests/dom.test.js` | Verifies every critical element ID exists in `index.html` |

Coverage enforced: **80% statements · 80% functions · 75% branches**

---

## 🤖 CI/CD Pipeline

Every push to `main` runs automatically:

```
git push to main
    │
    ├── 🧪 Test     npm run test:coverage
    ├── 🔍 Lint     htmlhint + required file checks
    └── 🚀 Deploy   only if Test + Lint pass → Netlify production
```

### Setup auto-deploy (one time)

1. **Netlify Site ID** → app.netlify.com → your site → Site configuration → API ID
2. **Netlify Auth Token** → app.netlify.com/user/applications → New access token
3. Add both to **GitHub → Settings → Secrets and variables → Actions**:

| Secret | Value |
|--------|-------|
| `NETLIFY_SITE_ID` | Your site API ID |
| `NETLIFY_AUTH_TOKEN` | Your access token |

Done — every `git push` now tests and deploys automatically. ✅

---

## 🗄 Database Schema

```sql
profiles          -- user data, bio, avatar, banner, pinned anime, goals
anime_list        -- per-user tracked anime (status, rating, MAL data)
reviews           -- anime reviews with optional anonymity
threads           -- community discussion threads
thread_replies    -- replies within threads
achievements      -- achievement definitions (id, title, icon, rarity)
user_achievements -- which user earned which achievement
```

Full SQL to create all tables:

```sql
create table profiles (
  id uuid references auth.users primary key,
  username text unique, bio text, avatar_url text,
  banner_colour text, pinned_anime jsonb, fav_genres text,
  watch_goal int, equipped_title text, created_at timestamptz default now()
);
create table anime_list (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id), mal_id int,
  title text, image text, type text, mal_score numeric,
  status text, user_rating int, created_at timestamptz default now(),
  unique(user_id, mal_id)
);
create table reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id), mal_id int,
  anime_title text, anime_image text, rating int, body text,
  is_anonymous boolean default false, genres text,
  created_at timestamptz default now()
);
create table threads (
  id bigint primary key generated always as identity,
  user_id uuid references profiles(id), title text, body text,
  anime_title text, is_anonymous boolean default false,
  upvotes int default 0, reply_count int default 0,
  created_at timestamptz default now()
);
create table thread_replies (
  id bigint primary key generated always as identity,
  thread_id bigint references threads(id),
  user_id uuid references profiles(id), body text,
  is_anonymous boolean default false, created_at timestamptz default now()
);
create table achievements (
  id text primary key, title text, description text,
  requirement text, icon text, rarity text, sort_order int
);
create table user_achievements (
  user_id uuid references profiles(id),
  achievement_id text references achievements(id),
  earned_at timestamptz default now(),
  primary key(user_id, achievement_id)
);
```

---

## 🏆 Achievements

| Icon | Title | Requirement | Rarity |
|------|-------|-------------|--------|
| ✍️ | First Impressions | Write first review | Common |
| 📖 | Prolific Reviewer | 10 reviews | Common |
| 🎯 | Critic | 25 reviews | Rare |
| 📚 | Encyclopaedia | 50 reviews | Epic |
| 📋 | Getting Started | Track 10 anime | Common |
| 🗂 | List Master | Track 50 anime | Rare |
| ✅ | Completionist | Complete 25 anime | Rare |
| 🏅 | True Completionist | Complete 50 anime | Epic |
| 💬 | Conversation Starter | Create 5 threads | Common |
| 🗣 | Community Pillar | Post 20 replies | Rare |
| ⚔️ | Action Fan | 5 Action reviews | Common |
| 💕 | Romance Fan | 5 Romance reviews | Common |
| 🌀 | Isekai Fan | 5 Isekai reviews | Common |
| 🌐 | Genre Master | Review 5+ genres | Epic |
| 🌟 | OG Member | First 10 users | **Legendary** |

---

## 🤝 Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) first, then:

```bash
git checkout -b feat/your-feature
# make changes
npm test
git commit -m "feat: describe your change"
git push origin feat/your-feature
# open a Pull Request
```

---

## 📜 License

MIT — see [LICENSE](LICENSE)

---

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Nunito&weight=800&size=16&duration=4000&pause=1000&color=7777A0&center=true&vCenter=true&width=500&lines=Built+for+the+anime+community;No+framework.+No+excuses.;Track+it.+Review+it.+Discuss+it." />
<br/>

**Made by [shaikhshahnawaz13](https://github.com/shaikhshahnawaz13)** — ⭐ Star if useful!
</div>
