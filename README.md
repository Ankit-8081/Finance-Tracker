# 💸 FinanceTracker

A full-featured personal finance tracker that runs entirely in your browser. Import your Indian bank statement (PDF or Excel), track spending by category, chat with an AI assistant about your finances, and get rich analytics — all with your data encrypted and synced securely via Firebase.

**🌐 Live Demo** → [ankit-8081.github.io/Finance-Tracker](https://ankit-8081.github.io/Finance-Tracker/)

---

## ✨ What's New (v2.0)

- 🔐 **Firebase Auth** — sign in with Google or email/password; data syncs across all your devices
- 🔒 **AES-GCM client-side encryption** — transaction descriptions and categories are encrypted in your browser before being saved to Firebase; the server never sees plaintext data
- 🤖 **Gemini AI Assistant** — floating chat assistant powered by Gemini 2.0 Flash; asks about your spending, gets budget advice, and can add transactions or create categories by voice command
- 📊 **Analytics page** — four deep-dive charts: Monthly Trends, Day-of-Week Heatmap, Month-on-Month Comparison, and Net Worth Over Time
- 📋 **Budget Planner** — enter your monthly balance, add budget items, track what's spent vs. remaining
- 🥧 **Spending Breakdown donut chart** — vivid per-category donut with legend, percentage bars, and top-category stats panel
- 🌍 **180+ currencies** — searchable currency picker in the header
- 📲 **PWA** — installable as a native app on Android, iOS, and desktop; works offline with local queue
- 🏷️ **Custom categories** — create your own categories with emoji picker; AI can auto-create and recategorize transactions into them
- 🔁 **Smart re-import dedup** — re-importing an updated bank statement never duplicates existing transactions; uses normalized description + type + amount + date matching

---

## 🚀 Getting Started

No installation required.

1. Open the [live demo](https://ankit-8081.github.io/Finance-Tracker/) in any modern browser
2. Sign in with Google or create an email account
3. Add transactions manually **or** import a bank statement

### Installing as an App (PWA)
- **Android / Chrome** → tap the install banner or use *Add to Home Screen*
- **iOS / Safari** → tap Share → *Add to Home Screen*
- **Desktop / Chrome** → click the install icon (📲) in the address bar or the header button

---

## 🏦 Bank Statement Import

Import directly from your bank's Net Banking export — no manual entry needed.

| Bank | Formats |
|------|---------|
| State Bank of India (SBI) | PDF (password-protected), Excel (.xlsx) |
| HDFC Bank | CSV, Excel |
| ICICI Bank | Excel, CSV |
| Axis Bank | CSV, Excel |
| Kotak Mahindra Bank | Excel, CSV |
| Yes Bank | CSV, Excel |
| Punjab National Bank | CSV, Excel |
| Bank of Baroda | CSV, Excel |
| IDBI Bank | CSV, Excel |
| Canara Bank | CSV, Excel |
| Any other bank | Generic auto-detect |

**How to import an SBI PDF:**
1. Log in to **OnlineSBI → Account Statement**
2. Select date range → Download as **PDF**
3. In the app, click **🏦 Import Statement**
4. Select **SBI** → drop your PDF → enter the statement password
5. Review the preview → click **Import**

- Re-importing an updated statement only adds **new** transactions — duplicates are detected and skipped automatically, and your custom categories are preserved

---

## 📊 Dashboard

### Stat Cards
- **Net Balance**, **Total Income**, **Total Expenses** — update instantly as you change filters
- Animated count-up numbers when data loads
- Respond to date range filter and category filter simultaneously

### Monthly Overview (Bar Chart)
- Last 6 months of income vs. expenses side-by-side
- Lazy-renders when scrolled into view for performance

### Spending Breakdown (Donut Chart)
- Per-category donut with vivid gradient slices
- Hover any slice to see exact amount and percentage
- Scrollable legend with rank badges, percentage bars, and amounts
- Toggle between **Expenses** and **Income** view
- Right-side stats panel: Top Category, Active Categories, Avg per Category

---

## 📈 Analytics

Open via the **📊 Analytics** button in the header.

| Chart | Description |
|-------|-------------|
| **Monthly Spending Trends** | Line chart of income vs. expenses — pick any date range or 6M / 12M / All preset |
| **Day-of-Week Heatmap** | Bar chart showing which days you spend most — 30D / 3M / All presets |
| **Month on Month** | Grouped bar chart comparing income & expenses across a custom month range, with summary cards |
| **Net Worth Over Time** | Area chart of cumulative balance — shows your wealth trajectory |

---

## 📋 Budget Planner

Open via the **📋 Planner** button in the header.

- Enter your current balance (auto-filled from dashboard)
- Add budget items with name and amount
- Check off items as you spend
- Live progress bar showing % of budget used
- Summary cards: Balance, Total Planned, Amount Left, Savings %

---

## 🤖 AI Finance Assistant

Click the 🤖 button (bottom-right) to open the chat.

- Powered by **Gemini 2.0 Flash** via a secure backend proxy — your API key is never exposed in the browser
- Receives your full financial snapshot with every message (totals, category breakdown, recent 15 transactions)
- **Chat mode** — ask questions: *"What did I spend most on this month?"*, *"How can I save more?"*
- **Action mode** — give commands:
  - *"Add a ₹500 food expense for today"* → previews the transaction before adding
  - *"Create a category called Shreyansh"* → opens an emoji picker, then creates the category
  - *"Move all Shreyansh transactions to the Shreyansh category"* → bulk recategorizes with confirmation
- Multi-turn conversation with memory of the last 14 turns
- Supports image uploads (e.g. photograph a receipt)

---

## 🗂️ Smart Auto-Categorisation

Transactions are automatically assigned a category based on UPI merchant names and description keywords:

| Category | Detected keywords / merchants |
|----------|-------------------------------|
| 🍔 Food | Swiggy, Zomato, Blinkit, BigBasket, Dunzo, Zepto |
| 🚗 Transport | Uber, Ola, Rapido, IRCTC, Fastag, Petrol, Toll |
| 🏠 Housing | Rent, Electricity, Water, Gas bill, BESCOM, BWSSB |
| ❤️ Health | Apollo, Netmeds, 1mg, Practo, Pharmacy, Hospital |
| 🛍 Shopping | Amazon, Flipkart, Myntra, Meesho, Nykaa, Ajio |
| 🎬 Movies | BookMyShow, PVR, INOX, Cinepolis |
| 💼 Salary | Salary, Payroll, Stipend credits |
| 📈 Investment | Zerodha, Groww, Mutual Funds, FD interest, Dividends |
| 🏧 ATM | ATM cash withdrawals (auto-creates matching cash credit) |
| 💵 Cash | Physical cash wallet (auto-created from ATM withdrawals) |
| 🔖 Other | Everything else |

- Each transaction row has an inline **category dropdown** — change it and stats update immediately
- Create **custom categories** with any emoji via the 🏷️ Categories button
- ATM withdrawals automatically create a matching **Cash income** entry so you can track physical cash spending separately

---

## 📅 Date Range Filtering

- **Quick presets** — All Time, 30 Days, 3 Months, 6 Months, Last 12 Months
- **Custom date picker** — pick any From → To range
- All stat cards, charts, and the transaction list respond in real time

---

## 🔍 Filter & Sort

- Filter by **type** (All / Income / Expense)
- Filter by **category** (including custom categories)
- Sort by Newest First, Oldest First, Highest Amount, or Lowest Amount
- **Paginated list** — 25 transactions per page, auto-loads more on scroll via IntersectionObserver

---

## 👤 Profile & Settings

- Change display name and profile photo (uploaded to Firebase Storage)
- Change password with re-authentication guard
- Account deletion with full data wipe
- Currency picker with 180+ currencies and live symbol updates throughout the app

---

## 🔒 Security & Privacy

| Feature | Detail |
|---------|--------|
| **AES-GCM encryption** | Transaction `desc` and `cat` fields encrypted client-side using a PBKDF2-derived key from your UID before being stored in Firebase |
| **Firebase App Check** | reCAPTCHA v3 blocks abuse and enforces security rules on production |
| **Auth rate limiting** | 5 failed login attempts per 60 seconds before UI lockout |
| **Password reset protection** | reCAPTCHA v3 challenge before sending reset emails |
| **AI key never in browser** | Gemini API key lives only on the backend Firebase Function; the browser calls a proxy |
| **Offline queue** | Changes made while offline are saved to localStorage and synced automatically on reconnect |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | Vanilla HTML + CSS + JavaScript (single file) |
| Auth & Database | Firebase Auth + Firebase Realtime Database |
| File Storage | Firebase Storage (avatar uploads) |
| Encryption | Web Crypto API (AES-GCM / PBKDF2) |
| AI | Google Gemini 2.0 Flash via Firebase Cloud Function proxy |
| PDF parsing | [PDF.js](https://mozilla.github.io/pdf.js/) (lazy-loaded) |
| Excel/CSV parsing | [SheetJS (xlsx)](https://sheetjs.com/) (lazy-loaded) |
| Charts | [Chart.js 4](https://www.chartjs.org/) |
| Fonts | Google Fonts (Outfit, Plus Jakarta Sans) |
| PWA | Service Worker + Web App Manifest |

**Single-file architecture** — the entire frontend lives in one `index.html`. No build step, no npm, no server needed beyond Firebase.

---

## 📁 Project Structure

```
Finance-Tracker/
├── index.html      ← Entire frontend (HTML + CSS + JS)
├── manifest.json   ← PWA manifest
├── sw.js           ← Service Worker (offline caching)
└── README.md       ← This file
```

---

## 🗺️ Roadmap

- [ ] Recurring transaction detection & alerts
- [ ] Multiple account support (savings, credit card, cash)
- [ ] Export to PDF report with charts
- [ ] More bank parsers (Paytm, Jupiter, Fi Money, NSDL)
- [ ] Budget targets per category with overspend alerts
- [ ] Shared household finance (multi-user view)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

Licensed under the [MIT License](./LICENSE).
