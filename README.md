# Live Coding Mock Interview 13 – Mini Flashcard Maker

This application allows users to create and study simple flashcards. Each flashcard contains a question and an answer, and users can flip cards to reveal or hide the answer. The app should make it easy to add new flashcards, view the list of existing ones, and interact with each card individually.

## 🔧 Functional Requirements
### 1. Create Flashcards
- [ ] Users must be able to add a new flashcard.
- [ ] Each flashcard must contain:
  - [ ] A question
  - [ ] An answer
- [ ] Newly created flashcards should appear immediately in the list.

### 2. Display Flashcards
- [ ] The application should list all created flashcards.
- [ ] Each flashcard must show the question by default.
- [ ] Users should be able to toggle the answer (show/hide).

### 3. State Persistence (In Memory)
- [ ] Flashcards only need to be stored in memory during runtime.
- [ ] No database or external storage is required.

### ⭐ Bonus Requirements
- [ ] Delete Flashcards
  - [ ] Allow users to remove a flashcard from the list.
- [ ] Edit Flashcards
  - [ ] Provide a way to modify an existing flashcard’s question and/or answer.
- [ ] Categories
  - [ ] Enable users to assign each flashcard to a category and filter by category.
- [ ] Study Mode
  - [ ] Add a dedicated view that:
    - [ ] Shows cards one at a time
    - [ ] Allows flipping the card
    - [ ] Moves to the next/previous card
- [ ] Local Persistence
  - [ ] Save flashcards so they remain available after restarting the app (e.g., local browser storage or simple file-based storage).