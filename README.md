# Task Manager with Zustand

A simple React application that demonstrates **Zustand** for state management to manage a task list. This is a quick implementation to add, edit, and remove tasks using Zustand.

## Features

- Add tasks.
- Edit tasks.
- Remove tasks.
- State management is handled by **Zustand**.

## Technologies Used

- **React** - For building the user interface.
- **Zustand** - For state management.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/razan-aboushi/Add-Tasks-with-Zustand.git
```

### 2. Navigate into the project folder "If it exists"

```bash
cd project folder name
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run start
```

This will open the app in your browser at [http://localhost:3000](http://localhost:3000).

## How It Works

### Zustand Store (`useTaskStore`)

This app demonstrates how to use **Zustand** for managing the state of tasks. The `useTaskStore` hook is responsible for the task management logic such as adding, removing, and updating tasks.

### Components

- **AddTasks.js**: This component is responsible for the user interface to add, edit, and remove tasks. It uses the Zustand store to manage the tasks in the global state.

### Task Actions:

- **Add a Task**: Clicking the "Add Task" button will add a new task to the list.
- **Edit a Task**: Clicking the "Edit" button will enable editing the task title.
- **Remove a Task**: Clicking the "❌" button will remove the task from the list.

