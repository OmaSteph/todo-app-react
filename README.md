# Oma's ToDo App

A modern, accessible, and responsive To-Do application built with React, Vite, TanStack Query, and Tailwind CSS.  
This app demonstrates best practices in state management, optimistic UI updates, error boundaries.

---

## Project Description and Features

Oma's To-Do App is a feature-rich task management application that allows users to create, view, update, and delete tasks.  
It is designed for speed, accessibility, and a great developer experience.

**Key Features:**

- **Task CRUD:** Create, read, update, and delete tasks (mocked with JSONPlaceholder API).
- **Optimistic UI:** UI updates instantly for edits and deletes, even though the backend is read-only.
- **Pagination:** Paginated task list with ellipsis and accessible navigation.
- **Filtering & Search:** Filter tasks by status and search by title.
- **Accessible Modals:** Add, edit, and delete tasks with keyboard and screen reader support.
- **Error Boundaries:** Friendly error UI for route and component errors.
- **Offline Ready:** Easily extendable to offline support.
- **Responsive Design:** Works great on desktop and mobile.
- **Modern Stack:** React 19, Vite, TanStack Query, Tailwind CSS, Shadcn UI, Lucide Icons.

---

## Installation and Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd todo-app-react
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

4. **Build for production:**

   ```sh
   npm run build
   ```

5. **Preview the production build:**

   ```sh
   npm run preview
   ```

---

## Available Scripts and Commands

- `npm run dev` — Start the development server with hot module reload.
- `npm run build` — Build the app for production.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run ESLint on the project.

---

## Technology Stack and Architecture Decisions

- **React 19** — UI library for building component-based interfaces.
- **Vite** — Fast build tool and dev server.
- **@tanstack/react-query** — Data fetching, caching, and state management.
- **Tailwind CSS** — Utility-first CSS framework for rapid UI development.
- **Shadcn UI** — Accessible, unstyled UI primitives (modals, dropdowns, etc).
- **Lucide Icons** — Icon set for modern UIs.
- **React Router (data router mode)** — File-based routing with error boundaries.
- **Optimistic Updates** — UI updates immediately on mutation, even if the backend is read-only.
- **Error Boundaries** — Both React and React Router error handling for robust UX.
- **Component Structure:**
  - `components/` — UI and general components (modals, lists, filters, etc).
  - `hooks/` — Custom hooks for mutations and data logic.
  - `lib/` — API callers, utilities, and filtering logic.
  - `pages/` — Route-level components (Home, TaskDetails).

---

## API Documentation and Usage

This app uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for demonstration.  
**Note:** The API does not persist changes; all mutations are mocked and the UI is updated optimistically.

**Endpoints used:**

- `GET /todos` — Fetch all tasks
- `GET /todos/:id` — Fetch a single task
- `POST /todos` — Create a new task (mocked)
- `PUT /todos/:id` — Update a task (mocked)
- `DELETE /todos/:id` — Delete a task (mocked)

**How the app handles API responses:**

- All create, update, and delete actions update the UI immediately by updating the React Query cache.
- No changes are persisted on the backend.

---

## Known Issues or Limitations

- **No true backend persistence:** All changes are local/optimistic; refreshing the page will reload the original data from JSONPlaceholder.
- **Offline support:** Not enabled by default.
- **No authentication:** All tasks are public and not user-specific.
- **No real-time sync:** Changes made in one tab are not reflected in others until a refresh.

---

## Future Improvements Planned

- **Offline Support:** Add service worker and runtime caching for offline usage.
- **Local Storage/IndexedDB:** Store tasks locally for persistence beyond a session.
- **User Authentication:** Allow users to log in and manage their own tasks.
- **Better Error Handling:** More granular error messages and retry options.
- **Unit and Integration Tests:** Add automated tests for components and hooks.

---
