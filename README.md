# Live Coding Mock Interview 11 – Simple Kahoot Clone (JavaScript/TypeScript/React)
Build a single-player, Kahoot-inspired quiz application using **React + Javascript/TypeScript**. This challenge evaluates your ability to work with dynamic data, conditional rendering, UI state management, and component composition.

You will consume a JSON file simulating a backend containing multiple quizzes. The user will select one quiz and go through its questions one by one, receiving instant feedback and a final score.

## 🎯 Objective

Create an interactive quiz app where the user can:
- Choose a quiz
- Answer multiple-choice questions
- See immediate feedback (right or wrong)
- View their final score and optionally restart

Use clean, modular, and typed (optional) React code. Keep the interface simple and usable. You may use basic CSS, CSS modules, or a utility library like Tailwind.

## 🛠 Base Requirements

### Task 1: Load Quizzes
- [ ] Load the quizzes from a `quizzes.json` file.
- [ ] Display a list of available quizzes (title and description).
- [ ] Allow the user to select one to begin.

### Task 2: Quiz Question Flow
- [ ] Display the current question and multiple-choice options.
- [ ] When the user selects an option:
  - Show if it was correct or incorrect
  - Highlight the correct answer
  - Disable further selections
- [ ] Provide a "Next" or "Finish" button to continue.

### Task 3: Final Score
- [ ] After the last question, show the user's score (e.g., "7 out of 10 correct").
- [ ] Provide a "Restart" or "Back to quiz selection" button.

### Task 4: Component Structure
- [ ] Use modular React components (e.g., QuizSelector, Quiz, QuestionCard, ScoreView).
- [ ] Use `useState` or `useReducer` to manage quiz state.

## ✨ Bonus Goals

### Bonus 1: Progress Indicator
- [ ] Show quiz progress (e.g., "Question 3 of 10" or a visual progress bar).

### Bonus 2: Timer
- [ ] Add a countdown timer per question (e.g., 15 seconds).
- [ ] If time runs out, disable answer selection and highlight the correct answer.

### Bonus 3: Answer Review
- [ ] At the end of the quiz, show which questions were missed and the correct answers.

### Bonus 4: Shuffle Options
- [ ] Randomize the order of options for each question.

### Bonus 5: Basic Animations
- [ ] Add fade/slide animations between question transitions.

## 📁 Data File

Use the provided `quizzes.json` file as your quiz database. You can read the file directly from the frontend.
