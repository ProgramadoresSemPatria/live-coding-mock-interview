# Live Coding Mock Interview 14 – Simple Expense Tracker

This challenge consists of building a small React + TypeScript application that allows users to manage a list of expenses. The goal is to evaluate core React fundamentals such as state management, controlled forms, list rendering, and basic TypeScript usage.

The application does **not** need styling beyond basic HTML elements. Focus on functionality and clarity rather than visual design.

---

## 🔧 Functional Requirements

### 1. Expense Model

* Each expense represents a single monetary entry.
* An expense contains:

  * A unique identifier
  * A short description
  * A numeric amount

---

### 2. Display Expenses

* The application should display a list of existing expenses.
* Each expense should clearly show its description and amount.

---

### 3. Add New Expenses

* Users should be able to add a new expense using a form.
* The form should allow entering:

  * A description
  * An amount
* After submission, the new expense should appear in the list.

---

### 4. Remove Expenses

* Users should be able to remove an existing expense from the list.

---

### 5. Total Calculation

* The application should display the total sum of all expenses.
* The total should always reflect the current list of expenses.

---

## 🧠 Technical Constraints

* Use React with function components
* Use React hooks for state management
* Use TypeScript
* No backend or database is required (in-memory only)

---

## ⭐ Bonus Requirements (Optional)

These are only required if time allows.

* Allow editing an existing expense
* Add basic validation (e.g. empty description, invalid amount)
* Add filtering or sorting of expenses
* Persist expenses between page reloads (for example, using local storage)

---

## 📝 Notes for the Candidate

* Focus on correctness and clear structure.
* You may look up documentation online.
* Please explain your thought process as you work.
