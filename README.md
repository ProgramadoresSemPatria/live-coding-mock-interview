# Live Coding Mock Interview 18 – Task Queue API

This challenge consists of implementing a small backend service for submitting and processing asynchronous tasks using TypeScript.

The goal is to evaluate senior-level backend fundamentals such as API design, TypeScript usage, asynchronous programming, state management, error handling, code organization, and engineering judgment.

The candidate will start from a minimal pre-configured TypeScript project to avoid setup overhead.

The application does not require authentication, a database, or external infrastructure. Store data in memory only and focus on correctness, clarity, and reasoning rather than completeness.

## 🔧 Functional Requirements

### 1. Create a Job

Provide an endpoint for submitting a new job.

Example request:

```http
POST /jobs
Content-Type: application/json

{
  "type": "email",
  "payload": {
    "to": "alice@example.com",
    "subject": "Welcome!"
  }
}
```

Each job should contain at least:

- Identifier
- Type
- Payload
- Status
- Creation timestamp

A newly created job should start with a `pending` status.

### 2. Get a Job

Provide an endpoint for retrieving a job by its identifier.

Example:

```http
GET /jobs/:id
```

The response should include the current job status.

Possible statuses:

```text
pending
processing
completed
failed
```

### 3. Process Jobs

Jobs should be processed asynchronously after they are created.

For this exercise, the actual processing can be simulated rather than performing a real operation.

For example, an email job could simply wait for a short period and then complete successfully.

The job status should transition appropriately:

```text
pending → processing → completed
```

If processing fails:

```text
pending → processing → failed
```

### 4. List Jobs

Provide an endpoint for retrieving existing jobs.

Example:

```http
GET /jobs
```

The response should contain the jobs currently stored by the application.

### 5. Error Handling

The API should handle common invalid requests appropriately.

Examples include:

- Attempting to retrieve a job that does not exist
- Missing required fields when creating a job
- Invalid job types
- Invalid request payloads

## 🧠 Technical Constraints

- Language: TypeScript
- Runtime: Node.js
- Expose a simple REST API
- Store data in memory only
- No database is required
- No authentication is required
- Job processing can be simulated
- Keep the implementation simple and focused
- Use asynchronous programming appropriately
- Avoid unnecessary dependencies or architecture

The candidate is free to choose the HTTP framework and supporting libraries.

## ⭐ Extension Requirements (Optional)

These requirements are only expected if time allows or if introduced by the interviewer.

### Retry Failed Jobs

Failed jobs should be retried automatically up to a maximum number of attempts.

For example:

```text
pending
   ↓
processing
   ↓
failed
   ↓
processing
   ↓
completed
```

The job should keep track of the number of attempts.

### Idempotency

Consider what happens if the same job is accidentally processed more than once.

The system should avoid producing unintended duplicate side effects.

### Concurrent Processing

The service should be capable of processing multiple jobs concurrently.

Consider:

- How many jobs can run at the same time?
- What happens when many jobs are submitted simultaneously?
- How are job state transitions kept consistent?

### Production Considerations

Discuss how the application would change if:

- The service ran on multiple instances
- Jobs needed to survive application restarts
- There were millions of jobs
- Job processing needed to be distributed across multiple workers
- A job processor became temporarily unavailable

The candidate does not need to implement these features. The focus is on explaining the relevant tradeoffs and possible approaches.

### Testing

If time allows, add basic tests covering important behavior such as:

- Creating a job
- Retrieving a job
- Processing a job
- Handling nonexistent jobs
- Handling processing failures

## 📝 Notes for the Candidate

- Focus on writing clean, readable, and maintainable TypeScript
- You may ask clarifying questions at any time
- You are encouraged to explain your thought process while coding
- It is okay to make assumptions—just communicate them clearly
- If you get stuck, talk through your approach
- Prioritize correctness and functionality over completeness
- You do not need to implement every extension requirement
- Avoid over-engineering the solution for the initial requirements

## 🎯 Evaluation Criteria

You will be evaluated based on:

- **Correctness** – Does the implementation meet the requirements?
- **TypeScript** – Are types used effectively and appropriately?
- **Code Quality** – Is the code clean, organized, and readable?
- **API Design** – Are the endpoints and responses clear and appropriate?
- **Asynchronous Programming** – Is asynchronous work handled correctly?
- **Error Handling** – Are invalid states and failures handled appropriately?
- **Problem Solving** – How do you approach and break down the problem?
- **Engineering Judgment** – Do you recognize tradeoffs and potential production concerns?
- **Communication** – Do you clearly explain your decisions and assumptions?
