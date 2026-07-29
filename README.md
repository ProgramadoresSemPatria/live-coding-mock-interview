# Live Coding Mock Interview 17 – Notes App

This challenge consists of implementing a small full-stack Notes application using React for the frontend and either Python or .NET for the backend.

The goal is to evaluate core full-stack fundamentals such as API design, state management, CRUD operations, component organization, and code quality.

The candidate will start from minimal pre-configured frontend and backend projects to avoid setup overhead.

The application does not require authentication, databases, or advanced architecture. Store data in memory only and focus on correctness, clarity, and reasoning rather than completeness.

## 🔧 Functional Requirements

### 1. List Notes

Display all existing notes retrieved from the backend.

Each note contains:
- Identifier
- Title
- Content
- Last updated timestamp

### 2. Create Notes

Allow users to create a new note by providing:
- Title
- Content

After creation, the note should immediately appear in the list.

### 3. Edit Notes

Users should be able to update both the title and content of an existing note.

The updated timestamp should reflect the latest modification.

### 4. Delete Notes

Allow users to delete a note.

The UI should update immediately after successful deletion.

### 5. Empty State

Display a friendly message when there are no notes available.

## 🧠 Technical Constraints

- Backend: Python or .NET
- Frontend: React
- Expose a simple REST API
- Store data in memory only
- Keep the implementation simple and focused
- Styling is optional and does not need to be polished

## ⭐ Bonus Requirements (Optional)

These are only required if time allows.

- Search notes by title
- Sort notes by last updated
- Auto-save edits
- Persist data using SQLite or a lightweight database
- Extract reusable React components
- Add basic unit tests
- Discuss how the application would scale in production

## 📝 Notes for the Candidate

- Focus on writing clean, readable, and maintainable code
- You may ask clarifying questions at any time
- You are encouraged to explain your thought process while coding
- It is okay to make assumptions—just communicate them clearly
- If you get stuck, talk through your approach
- Prioritize functionality over visual polish

## 🎯 Evaluation Criteria

You will be evaluated based on:

- Correctness – Does the implementation meet the requirements?
- Code Quality – Is the code clean, organized, and readable?
- API Design – Are the endpoints clear and appropriate?
- State Management – Is frontend state handled clearly and predictably?
- Problem Solving – How do you approach and break down the problem?
- Communication – Do you clearly explain your decisions and tradeoffs?
