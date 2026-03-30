# Live Coding Mock Interview 15 – Task Management API

This challenge consists of implementing a small backend API using Python (FastAPI or Flask) to manage a list of tasks.

The goal is to evaluate core backend fundamentals such as API design, data modeling, request validation, and code organization. The candidate will start from a minimal pre-configured project to avoid setup overhead.

The application does not need authentication, database integration, or advanced architecture. Focus on correctness, clarity, and reasoning rather than completeness.

## 🔧 Functional Requirements
### 1. Task Model

Each task represents a unit of work.

A task should contain:
- A unique identifier
- A title (string)
- A completion status (boolean)

### 2. Create Tasks
Implement an endpoint to create a new task.
- The request should include a title.
- The created task should be returned in the response.

### 3. List Tasks
- Implement an endpoint to retrieve all tasks.
- The response should return a list of tasks.

### 4. Update Task Status
- Implement an endpoint to update a task’s completion status.
- The user should be able to mark a task as completed or not completed.

### 5. Delete Tasks
- Implement an endpoint to delete a task by its identifier.
- The task should be removed from the in-memory store.

## 🧠 Technical Constraints
- Use Python with either FastAPI or Flask
- Store data in memory (no database required)
- Keep the implementation simple and focused
- You may use standard libraries or lightweight dependencies if needed

## ⭐ Bonus Requirements (Optional)

These are only required if time allows.
- Add request validation (e.g. empty title, invalid inputs)
- Implement filtering (e.g. list only completed or pending tasks)
- Improve error handling (clear status codes and messages)
- Structure the code into layers (routes, services, models)
- Add simple tests for the endpoints
- Discuss or sketch how this would scale with a real database

## 📝 Notes for the Candidate
- Focus on writing clean, readable, and maintainable code
- You may ask clarifying questions at any time
- You are encouraged to explain your thought process while coding
- It is okay to make assumptions—just communicate them clearly
- If you get stuck, talk through your approach

## 🎯 Evaluation Criteria

You will be evaluated based on:
- Correctness – Does the implementation meet the requirements?
- Code Quality – Is the code clean, organized, and readable?
- API Design – Are endpoints and data structures well designed?
- Problem Solving – How do you approach and break down the problem?
- Communication – Do you clearly explain your decisions and tradeoffs?