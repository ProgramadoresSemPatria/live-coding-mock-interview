# Live Coding Mock Interview 10 – Kanban Board (JavaScript/TypeScript)
Build a lightweight Kanban board using JavaScript or TypeScript. This exercise evaluates your frontend architecture skills, component decomposition, state management, and optional backend simulation or integration.

You may use any npm package or UI library (e.g., Tailwind, DnD libraries). Focus on clean, typed, and functional code.

## 🎯 Objective
Create a simple Kanban board with 3 columns:
- Todo
- In Progress
- Done

Users should be able to create tasks and move them between columns via drag-and-drop.

## 🛠 Base Requirements
### Task 1: Display Columns
- [ ] Display three columns labeled: Todo, In Progress, Done.
- [ ] Each column should list its associated tasks.

### Task 2: Add Tasks
- [ ] Provide a way to add a new task to a column (e.g., an input and button).
- [ ] Tasks must have a unique ID and a text label.

### Task 3: Move Tasks Between Columns
- [ ] Implement drag-and-drop to move tasks between columns.
- [ ] The task state must update immediately on drop.

### Task 4: Component Structure
- [ ] Use modular React components for Board, Column, and Task.
- [ ] Use useState or useReducer to manage board state.

## ✨ Bonus Goals
### Bonus 1: State Persistence
- [ ] Save the board state to localStorage.
- [ ] Load the saved state on page refresh.

### Bonus 2: Task Details
- [ ] Allow editing task descriptions.
- [ ] Optionally add metadata (e.g., created date).

### Bonus 3: Task Deletion
- [ ] Add a delete button for removing a task.

### Bonus 4: Backend Integration
- [ ] Simulate a backend with an Express.js server.
- [ ] Create basic GET and POST endpoints to sync board state.

### Bonus 5: UX Enhancements
- [ ] Responsive layout and animations.
- [ ] Use toast messages for actions (e.g., task created, deleted).