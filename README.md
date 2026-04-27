# Playwright End-to-End SaaS Testing Suite (TypeScript)

This project is a **real-world end-to-end (E2E) automation suite** built with **Playwright** and **TypeScript**, simulating how QA engineers test a full user workflow in a production-like SaaS application.

---

## Tech Stack

- Playwright Test
- TypeScript
- Node.js

---

## Project Structure
- pages/ # Page Object Model (Login, Inventory, Cart, Checkout)
- tests/ # End-to-end and authentication test scenarios
- data/ # Test data (user credentials)

---

## Key Features

### Authentication Testing
- Valid user login
- Invalid/locked user scenarios
- Session validation after page reload

### Full User Journey Testing
- Login → Inventory → Cart → Checkout → Order Confirmation
- Simulates real customer behavior in an e-commerce SaaS system

### Session Handling
- Validate session persistence after page refresh
- Ensure secure navigation between pages

### Checkout Flow Validation
- Form input validation
- Order completion verification
- Success message assertion

---

## Test Coverage

This suite includes:

- End-to-end purchase flow
- Authentication scenarios
- Session persistence validation
- Cart and checkout functionality

---

## Design Approach

### Page Object Model (POM)
Each page encapsulates its own logic:
- `LoginPage`
- `InventoryPage`
- `CartPage`
- `CheckoutPage`

This improves:
- maintainability
- readability
- scalability

### Data-Driven Testing
User credentials are managed in a centralized file:
data/users.ts

This enables:
- easy test expansion
- multiple user role testing

---

## How to Run This Project
1. Install dependencies
- npm install
2. Install browsers
- npx playwright install chromium firefox
3. Run tests
- npx playwright test
4. View report
- npx playwright show-report

---

## Test Application
This project uses:
https://www.saucedemo.com

---

### Key Highlights
- Simulates real-world SaaS workflows
- Validates multi-step business processes
- Demonstrates end-to-end system thinking
- Uses clean architecture with POM
- Covers both functional and user journey testing

---

## Author
Built by Dotun Akinlabi
QA Engineer | Automation Tester 
