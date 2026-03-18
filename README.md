# 💰 Finance Tracker

A personal finance tracker that runs entirely in your browser — no backend, no account, no data leaving your device. Import your Indian bank statement (PDF or Excel), and get an instant breakdown of your income, expenses, and spending patterns.


**Live Deployement** - https://ankit-8081.github.io/Finance-Tracker/

---

## ✨ Features

### 📊 Dashboard & Stats
- **Live stat cards** — Net Balance, Total Income, and Total Expenses update instantly as you change filters
- **Category-aware stats** — select any category from the filter and the cards reflect only that category's numbers
- **Spending chart** — monthly income vs. expenses bar chart for visual tracking

### 🏦 Bank Statement Import
Import directly from your bank's Net Banking export — no manual entry needed.

| Bank | Formats |
|------|---------|
| State Bank of India (SBI) | PDF (Net Banking), Excel (.xlsx) |
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

- **Password-protected files** — enter your statement password directly in the import modal
- **Duplicate detection** — re-importing the same statement won't create duplicate entries
- **Import preview** — review parsed transactions before confirming

### 🗂️ Smart Auto-Categorisation
Transactions are automatically assigned a category based on UPI merchant names and description keywords:

| Category | Examples |
|----------|---------|
| 🍔 Food | Swiggy, Zomato, Blinkit, BigBasket |
| 🚗 Transport | Uber, Ola, IRCTC, Rapido, Fastag |
| 🏠 Housing | Rent, Electricity, Water, Gas bill |
| ❤️ Health | Apollo, Netmeds, 1mg, Practo |
| 🛍 Shopping | Amazon, Flipkart, Myntra, Meesho |
| 💼 Salary | Salary, Payroll, Stipend credits |
| 📈 Investment | Zerodha, Groww, Mutual Funds, FD interest |
| 🏧 ATM | ATM cash withdrawals |
| 💵 Cash | Cash wallet (auto-created from ATM withdrawals) |
| 🔖 Other | Everything else |

- Each transaction row has an inline **category dropdown** — change it and the stats update immediately
- ATM withdrawals automatically create a matching **Cash wallet credit** so you can track physical cash spending separately

### 📅 Date Range Filtering
- **Quick presets** — Last 30 days, Last 3 months, Last 6 months, This year
- **Custom date picker** — pick any From → To range using calendar inputs
- All stat cards and the transaction list respond to the selected range in real time

### 🔍 Filter & Sort
- Filter by **transaction type** (All / Income only / Expense only)
- Filter by **category**
- Sort by **Newest First**, **Oldest First**, **Highest Amount**, or **Lowest Amount**
- Cash wallet entries are hidden from All Categories view — only visible when Cash filter is selected

### 💾 Data Management
- **Local storage** — all transactions stored in your browser, nothing sent to any server
- **Export CSV** — download all your transactions as a spreadsheet
- **Multi-currency** — choose your currency symbol (150+ currencies supported)
- **Delete individual** transactions or **Delete All** with confirmation

---

## 🚀 Getting Started

No installation required. Just open the file.

1. Download `app.html`
2. Open it in any modern browser (Chrome, Firefox, Edge, Safari)
3. Add transactions manually **or** import a bank statement

### Importing an SBI PDF Statement

1. Log in to **OnlineSBI → Account Statement**
2. Select date range → Download as **PDF**
3. In the app, click **🏦 Import Statement**
4. Select **SBI** as the bank
5. Drop your PDF file (enter password if prompted)
6. Review the preview → click **Import**

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | Vanilla HTML + CSS + JavaScript |
| PDF parsing | [PDF.js](https://mozilla.github.io/pdf.js/) |
| Excel/CSV parsing | [SheetJS (xlsx)](https://sheetjs.com/) |
| Charts | [Chart.js](https://www.chartjs.org/) |
| Fonts | Google Fonts (Outfit) |
| Storage | Browser `localStorage` |

**Single-file architecture** — everything is in one `app.html`. No build step, no dependencies to install, no server needed.

---

## 🔒 Privacy

All processing happens locally in your browser. Your bank statements and transaction data are **never uploaded or transmitted anywhere**. Closing the tab keeps your data in `localStorage` on your device.

---

## 📁 Project Structure

```
app.html          ← The entire application (HTML + CSS + JS)
README.md         ← This file
```

---

## 🗺️ Roadmap

- [ ] Monthly budget targets per category
- [ ] Recurring transaction detection
- [ ] Multiple account support
- [ ] Export to PDF report
- [ ] More bank parsers (Paytm, Jupiter, Fi Money)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

Licensed under the [MIT License](./LICENSE).
