# 🧪 OrangeHRM Login Automation with Playwright

This project demonstrates **end-to-end test automation** for the [OrangeHRM demo website](https://opensource-demo.orangehrmlive.com) using **Playwright** with Node.js. The framework follows the **Page Object Model (POM)** design pattern and includes logging, configuration management, and a clean folder structure.

---

## 📁 Project Structure

ORANGE_HRM_PLAYWRIGHT/
│
├── logs/ # Log files (generated automatically)
│ └── combined.log
│
├── tests/
│ ├── Pages/ # Page Object files
│ │ └── Login_Page.js
│ │
│ ├── Test_Folder/ # Test specifications
│ │ └── Login_Test.spec.js
│ │
│ └── Utilities/ # Utility files (config, logger)
│ ├── config.json
│ ├── logger.js
│ └── example.spec.js
│
├── node_modules/
├── playwright.config.js # Playwright test runner config
├── package.json
├── package-lock.json
└── .gitignore

yaml
Copy
Edit

---

## 🧰 Technologies Used

- 🎭 [Playwright](https://playwright.dev/) - Test automation framework
- 🧱 JavaScript (ES6)
- 🧪 Page Object Model
- 📝 Winston Logger for logs
- 🗂 JSON for configuration

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/OrangeHRM-Playwright.git
cd OrangeHRM-Playwright
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Test
bash
Copy
Edit
npx playwright test
4. View the HTML Report
bash
Copy
Edit
npx playwright show-report
🔧 Configuration (config.json)
Update tests/Utilities/config.json with your test data:

json
Copy
Edit
{
  "un": "Admin",
  "ps": "admin123",
  "url": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  "title": "OrangeHRM"
}
📜 Logging
All log messages are written to logs/combined.log using winston logger.

Helps in debugging and tracking test actions.

📄 Example Test (Login)
js
Copy
Edit
test('Login_Test', async({ page }) => {
  await login.get_Login_Page(data.url);
  await login.validate_title(data.title);
  await login.complete_Login_Action(data.un, data.ps);
});
✅ Features
🔐 Login page automation

✅ Validates page title and input values

📄 Page Object Model structure

📋 Config-driven data

📁 Logging with Winston

🧪 Playwright test runner

👨‍💻 Author
Tejas Jayendra Aware
Software Test Automation Engineer
📧 [awaretejas1@gmail.com ]

