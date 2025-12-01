📘 sdet-playwright

A beginner-friendly Playwright automation framework featuring UI testing, API testing, Page Object Model (POM) patterns, and cross-browser execution (Chromium, Firefox, WebKit).
Designed for SDET learning and portfolio building.

🔥 Features

UI test automation with Playwright

API testing using jsonplaceholder

Page Object Model (POM) structure

Cross-browser execution (Chromium, Firefox, WebKit)

Debugging with Playwright Inspector

GitHub Actions CI pipeline

Clean project layout for beginners

📂 Project Structure

sdet-playwright/
├── tests/
│ ├── login.spec.js
│ ├── login_pom.spec.js
│ └── api.spec.js
├── pages/
│ └── LoginPage.js
├── playwright.config.js
├── package.json
├── README.md
└── .github/workflows/playwright.yml

⚙️ Installation

Install dependencies
npm install
npx playwright install

▶️ Running Tests

Run all tests (headless):
npm test

Run in headed mode:
npm run test:headed

Run one test:
npx playwright test tests/login.spec.js

Run with list reporter:
npx playwright test --reporter=list

🐞 Debugging

Git Bash:
set PWDEBUG=1 && npx playwright test tests/login.spec.js

PowerShell:
$env:PWDEBUG=1; npx playwright test tests/login.spec.js

Show Playwright report:
npx playwright show-report

🌐 API Testing Example

A sample POST API test using jsonplaceholder is included in tests/api.spec.js.

🤖 GitHub Actions CI


This repo includes a CI workflow using GitHub Actions (.github/workflows/playwright.yml)
It runs Playwright tests automatically on every push.

📜 License

Licensed under the MIT License.

👤 Author

Pushkar Arun Kadam
GitHub: https://github.com/kadampushkar25-cpu
