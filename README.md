# Live Coding Mock Interview 19 - Solana To-do List DApp

This challenge consists of implementing a small on-chain to-do list
program on Solana.

The goal is to evaluate backend-focused Solana development skills,
including Rust, Anchor, account modeling, Program Derived Addresses
(PDAs), instruction design, authorization, validation, and error
handling.

You will start from a preconfigured Anchor project with a Solana program
scaffold and a ready-to-use environment for building, deploying, and
invoking the program. No frontend implementation is required.

You have **45 minutes**. Prioritize a correct, understandable
implementation over completeness.

## 🔧 Functional Requirements

### 1. Create a Task

-   [ ] **Create a task:** Allow a user to create a task with a
    description.
-   [ ] **Associate the task with its creator:** Record the wallet that
    created the task.
-   [ ] **Set the initial status:** A newly created task should be
    pending.
-   [ ] **Reject invalid descriptions:** Do not allow an empty task
    description.

### 2. Retrieve Tasks

-   [ ] **Retrieve a user's tasks:** Support retrieving tasks associated
    with a given wallet.
-   [ ] **Expose task details:** Make each task's description, status,
    and creator available.
-   [ ] **Handle users without tasks:** Support the case where a wallet
    has not created any tasks.

### 3. Complete a Task

-   [ ] **Complete a task:** Allow a task to be marked as completed.
-   [ ] **Enforce ownership:** Only the wallet that created a task may
    complete it.
-   [ ] **Prevent invalid state changes:** A completed task must not be
    completed again.

### 4. Handle Errors

-   [ ] **Validate accounts:** Reject invalid or unexpected accounts.
-   [ ] **Handle missing tasks:** Return an appropriate error when a
    task cannot be found.
-   [ ] **Handle unauthorized actions:** Reject attempts to modify
    another user's task.
-   [ ] **Provide meaningful errors:** Use clear program errors for
    invalid input or state.

## 🧠 Technical Constraints

-   [ ] **Blockchain:** Solana.
-   [ ] **Program language:** Rust.
-   [ ] **Program framework:** Anchor.
-   [ ] **On-chain persistence:** Store task data on Solana; do not use
    a centralized database.
-   [ ] **Task ownership:** Associate tasks with the wallet that created
    them.
-   [ ] **Authorization:** Enforce ownership checks in the program.
-   [ ] **State management:** Persist task status and update it through
    program instructions.
-   [ ] **Environment:** Use the preconfigured build, deployment, and
    test setup.

No frontend or user interface is required. The program will be built,
deployed, and invoked using the provided development setup.

The candidate is responsible for designing the task account model,
implementing the required instructions, and making task data
retrievable.

## ⭐ Optional Extensions

Only attempt these if the core requirements are complete or if the
interviewer asks you to explore them.

-   [ ] **Delete a task:** Allow its creator to delete one of their
    tasks.
-   [ ] **Edit a task:** Allow its creator to update the task
    description.
-   [ ] **Reopen a task:** Allow a completed task to return to pending.
-   [ ] **Add task limits:** Define and enforce a maximum description
    length or task count.

You may also be asked to discuss how you would handle a large number of
tasks, account storage costs, or efficient discovery of a user's tasks.
These discussions do not need to be implemented.

## 📝 Notes for the Candidate

-   You may ask clarifying questions at any time.
-   Explain your approach and important decisions while coding.
-   It is okay to make assumptions---just communicate them clearly.
-   If you get stuck, talk through your approach.
-   Prioritize correctness and functionality over completeness.
-   You do not need to implement optional extensions.
-   Avoid over-engineering the initial solution.

## 🎯 Evaluation Criteria

You will be evaluated based on:

-   **Correctness** -- Does the program meet the functional
    requirements?
-   **Rust and Anchor** -- Are Rust and Anchor used clearly and
    appropriately?
-   **Solana Fundamentals** -- Does the candidate understand accounts,
    signers, PDAs, ownership, and instructions?
-   **Account Design** -- Is task data modeled and stored appropriately?
-   **Authorization and Validation** -- Are ownership and input
    constraints enforced by the program?
-   **Error Handling** -- Are invalid inputs, missing tasks, and invalid
    state transitions handled sensibly?
-   **Code Quality** -- Is the code readable and maintainable?
-   **Problem Solving** -- How does the candidate break down the task
    and make progress?
-   **Engineering Judgment** -- Does the candidate recognize storage,
    account discovery, and scalability tradeoffs?
-   **Communication** -- Are assumptions and tradeoffs explained
    clearly?
