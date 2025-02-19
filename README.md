# Live Coding Mock Interview 7 - URL Shortener App
Build a URL shortener from scratch using Node.js, React/Next.js, TypeScript, and an in-memory database. The app should allow users to enter a long URL, generate a shortened version, and redirect users when they visit the short URL.

## Features
### Backend
- [ ] Create an in-memory storage.
- [ ] Expose a POST `/shorten` endpoint that:
  - [ ] Accepts a long URL.
  - [ ] Generates a short URL
  - [ ] Stores the mapping in memory.
- [ ] Expose a GET `/:shortUrl` endpoint that:
  - [ ] Looks up the long URL from in-memory storage.
  - [ ] Redirects the user to the original URL.
- [ ] Implementation in JavaScript

### Frontend

- [ ] Simple form to input a long URL.
- [ ] Call the backend `/shorten` API and display the generated short URL.
- [ ] Clicking the short URL should open it in a new tab.
- [ ] Implementation in JavaScript

## Bonus Goals

### Backend
- [ ] Set up PostgreSQL connection.
- [ ] Migrate storage from in-memory to PostgreSQL.
- [ ] Implement a visit count feature in the database.
- [ ] Provide a Docker Compose file with PostgreSQL.
- [ ] Implementation in TypeScript

### Frontend
- [ ] Show a list of previously shortened URLs.
- [ ] Display the number of visits per short URL.
- [ ] Implementation in TypeScript
