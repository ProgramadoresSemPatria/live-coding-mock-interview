# Live Coding Mock Interview 16 – Movie Explorer App

This challenge consists of implementing a small frontend application using JavaScript or TypeScript to browse and search a movie catalog.

The goal is to evaluate core frontend fundamentals such as component design, state management, asynchronous data handling, filtering logic, and code organization.

The candidate will start from a minimal pre-configured project to avoid setup overhead.

The application does not require authentication, backend development, routing, or advanced architecture. Focus on correctness, clarity, and reasoning rather than completeness.

## 🔧 Functional Requirements

### 1. Load Movie Data

The application should load movie data asynchronously from the provided `movies.json` file.

Each movie contains:
- An identifier
- A title
- A genre
- A release year
- A rating
- A duration in minutes

### 2. Display Movies

Render the movie catalog in a clean and readable way.

Each movie item should display at least:
- Title
- Genre
- Year
- Rating

### 3. Search Movies

Implement a search input that allows users to filter movies by title.

Search behavior should:
- Update results dynamically as the user types
- Be case-insensitive

### 4. Filter by Genre

Allow users to filter movies by genre.

The user should be able to:
- Select a genre
- View only movies matching that genre
- Clear the filter to see all movies again

### 5. Loading and Empty States

The application should handle:
- A loading state while data is being fetched
- An empty state when no movies match the current filters

## 🧠 Technical Constraints

- Use JavaScript or TypeScript
- Use React (preferred) or another modern frontend framework
- Store data in memory only
- Keep the implementation simple and focused
- Styling is optional and does not need to be polished

## ⭐ Bonus Requirements (Optional)

These are only required if time allows.

- Add debounced search
- Add sorting (e.g. by rating or year)
- Persist filters using localStorage
- Add pagination or infinite scrolling
- Extract reusable hooks/components
- Improve accessibility and keyboard navigation
- Add unit tests for components or filtering logic
- Discuss how this would scale with a real API

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
- State Management – Is the application state handled clearly and predictably?
- UX Awareness – Are loading, empty, and filtering states handled properly?
- Problem Solving – How do you approach and break down the problem?
- Communication – Do you clearly explain your decisions and tradeoffs?