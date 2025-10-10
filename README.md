
# Playwright Test Automation

This repository contains a **Playwright + TypeScript test automation framework** designed to validate the e-commerce flow.
It includes end-to-end checkout flows and additional sanity tests for key functionalities.

---

## Features

- End-to-end automation using **Playwright with TypeScript**.  
- **Page Object Model (POM)** design pattern for better maintainability.  
- Multi-language support (**English implemented; other languages can be added**).  
- **HTML report generation** with Playwright.  
- Organized folder structure for **E2E and sanity tests**.  

---

## Prerequisites

### Before running the tests, ensure the following are installed:

- **Node.js** (v18 or above recommended) – required to run Playwright and manage dependencies.  
- **npm** – comes with Node.js for installing packages.  
- **IDE or code editor** (VS Code recommended) – to open and navigate the project.  

---

## Project Setup

1. Clone the repository

* git clone https://github.com/sreelekshmi-mp/playwright-ts-castle.git
* cd playwright-ts-castle

2. Install dependencies

* npm install

3. Install Playwright browsers

* npx playwright install

---

## Project Structure

- **Pages folder** – contains page objects following the **POM pattern** for various sections of the website  
- **Utils folder** – contains helper files and reusable functions for **common actions, base test setup, and multi-language support**  
- **Tests folder** – organized into **e2e** (full checkout flow and cart tests) and **sanity** (country dropdown and other critical verifications)

---

## Running Tests

1. Run all tests

* npx playwright test

2. Run tests in a specific folder

* npx playwright test tests/e2e
* npx playwright test tests/sanity

---

## Reports

- **Playwright HTML report** is enabled by default and stored in the `playwright-report` folder  
- Open the latest report using:
  * npx playwright show-report

---

## Notes on Multi-language Testing

- Multi-language support is implemented, but currently only **English** is fully working  
- Other languages can be tested by updating the `LanguageMap` and using the **language fixture** in tests  

---

## TEST-NOTES.md

- Tests cover **critical e-commerce flows**: checkout, cart item removal, and country selection  
- **Prioritization in CI/CD pipeline**:  
  - Checkout flow – **E2E (critical)**  
  - Cart item removal – **sanity/critical**  
  - Country dropdown verification – **sanity/medium priority**

---
