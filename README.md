# Notification System POC

This is a proof-of-concept (POC) app demonstrating a basic notification system in a Next.js App Router setup. It uses a backend queue to process notifications triggered by user interactions (e.g., liking a post).

---

## Technologies Used

- **Next.js (App Router)** – frontend and backend API handling
- **TypeScript** – static typing
- **In-memory Queue and DB**- For feasibility of logic
- **Tailwind CSS** – styling
- **Shadcn/ui** – UI components
- **Lucide Icons** – React icon set

---

## How to Run Locally

1. **Clone the repo**
  ```bash
  git clone <your-repo-url>
  cd <project-folder>
  npm install
  npm run dev
  ```

## Approach

1. As user likes the post event is generated and api is called which equeue that data and creates a job which in turn handle by an worker and calls the notification service. 
2. Notification service saves the data of notification such as postId, ownerId, userid(user who likes the post). Here we can add the notification service that carries the notification to the user.
Note :I have used in-memory due to local issues with docker therefore to cover the assignment within deadline.

### Demo Video: 
https://drive.google.com/file/d/1ub67Fi8-UfA9_PYb2i4pGbfNx6jGJQ0K/view?usp=sharing
