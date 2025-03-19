# Live Coding Mock Interview 8 - Simple Voting System
Build a Simple Voting System from scratch. The app should allow users to create a poll with multiple options, vote for an option, and see the results update dynamically. The backend should expose REST APIs to handle poll creation, voting, and retrieving results, while the frontend should provide a user-friendly interface for interacting with the system.

## Features
### Backend

- [ ] API Endpoints:
  - [ ] POST /polls → Create a poll with options.
  - [ ] POST /vote → Cast a vote for a poll option.
  - [ ] GET /polls/{id}/results → Fetch poll results.
- [ ] Data Storage:
  - [ ] Use an in-memory map or SQLite to store votes.

### Frontend

- [ ] A form to create a poll and select voting options.
- [ ] A button to submit a vote.
- [ ] Poll results displayed dynamically via API polling.

## Bonus Goals

### Backend
- [ ] Authentication.
  - [ ] Users can only vote once.
- [ ] Use a PostgreSQL connection.
  - [ ] Provide a Docker Compose file with PostgreSQL.

### Frontend
- [ ] Registration and login pages.
- [ ] Show vote percentages instead of raw numbers.
- [ ] Highlight the user's vote
