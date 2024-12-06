import {create} from "zustand";

export const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (title) =>
        set((state) => ({
            tasks: [...state.tasks, {id: Date.now(), title}],
        })),
    removeTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),
    updateTask: (id, updatedData) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? {...task, ...updatedData} : task
            ),
        })),
}));
