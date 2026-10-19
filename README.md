# RestoFlow — Restaurant Task Manager

## About
RestoFlow is a restaurant task management app built to help organize daily restaurant activities. It includes a task manager and pages for orders, reservations, tables, food menu, inventory, staff, and reports.

## Technologies
- HTML
- Tailwind CSS v4
- Vanilla JavaScript
- Vite
- LocalStorage

## Features
- Add, edit, complete, and delete tasks
- Validate task descriptions
- Filter tasks by All, Active, and Completed
- Show remaining tasks and clear completed tasks
- Save tasks and preferences in LocalStorage
- Priority levels and priority sorting
- Dark mode
- Live search and progress bar
- Restaurant orders, reservations, tables, menu, inventory, and staff pages

## Extra Features
- Priority sorting
- Dark mode
- Live search
- Progress bar

## User Stories
- As a restaurant worker, I want to add tasks so I can organize my work.
- As a restaurant worker, I want to mark tasks complete so I can track my progress.
- As a restaurant manager, I want to manage orders, reservations, tables, and inventory.

## Task Data
Each task is stored as an object in an array.

Example:

```javascript
{
  id: "task-123",
  text: "Prepare dining tables",
  done: false,
  priority: "high",
  createdAt: Date.now()
}
```

## How to Run Locally
1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

## Links
- **GitHub Repository:** [Add your repository link]
- **Live Website:** [Add your deployed website link]
- **Demo Video:** [Add your video link]

## Challenges and What I Learned
I learned how to use JavaScript arrays and objects to manage application data. I practised updating the interface using a render function. I learned how LocalStorage and JSON can save data after a page refresh. I also learned how event listeners and event delegation work with dynamically created task elements. One challenge I encountered was [describe the bug you fixed using DevTools and explain how you found the cause].



