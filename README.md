# Playwright SauceDemo — QA Automation Portfolio

E2E test automation project for [Sauce Demo](https://www.saucedemo.com/) built with **Playwright + TypeScript**.

This is a **portfolio project**. Coverage is intentionally limited — the goal is to demonstrate automation skills and project structure, not full regression testing of a real product.

Sauce Demo is a public demo website, so anyone can clone the repo and run the tests.

---

## Tech stack

- Playwright
- TypeScript
- Page Object Model
- Custom fixtures
- External test data + Faker
- HTML / Allure reports

---

## What is covered

- Authentication (valid login, locked user, logout)
- Product catalog (add/remove items, sorting)
- Cart
- Full purchase E2E flow

---

## How to run

```bash
npm install
npx playwright test
npx playwright show-report