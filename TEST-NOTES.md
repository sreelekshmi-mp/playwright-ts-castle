# TEST NOTES

## Part 1 – Checkout Flow

- It is the most critical path for any ecommerce platform.
- It validates that users can configure products, add them to the cart, and proceed to checkout.
- Verifies product details and price to ensure accuracy.

**Priority in CI/CD:** 
- ✅ High priority – should run on every commit (smoke/regression).

---

## Part 2 – Extra Tests

### 1. Cart Item Deletion
- Validates that users can remove products from the cart.
- Ensures cart updates correctly (empty state message, product no longer visible).
- Ensures proper cart behavior during the checkout process.

**Priority in CI/CD:**  
- ✅ High priority – should run on every commit (smoke/regression).

### 2. Country Dropdown Verification
- Ensures that all available countries/languages are displayed correctly in the dropdown.  
- Verifies that all expected options are present.  
- Detects missing or incorrect options in the dropdown to maintain consistency in the UI.

**Priority in CI/CD:**  
- ✅ Medium priority – run daily or before major releases.

---

## Overall Prioritization
1. Checkout Flow (High)
2. Cart Item Deletion (High)
3. Country Dropdown Verification (Medium)