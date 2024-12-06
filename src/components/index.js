import {useState} from "react";
import {useTaskStore} from "../taskStore";

const AddTasks = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [editingTaskId, setEditingTaskId] = useState(null);
    const {tasks, addTask, removeTask, updateTask} = useTaskStore();

    const handleAdd = () => {
        if (taskTitle.trim().length > 0) {
            addTask(taskTitle);
            setTaskTitle("");
        }
    };

    const handleEdit = (taskId) => {
        setEditingTaskId(taskId);
    };


    return (
        <>
            <div className="taskContainer">
                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="inputField"
                />
                <button type="button" className={taskTitle.length === 0 && "disabled"} onClick={handleAdd}>
                    Add Task
                </button>
            </div>
            <div className="taskListContainer">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task.id} className="taskItem">
                            {editingTaskId === task.id ? (
                                <input
                                    type="text"
                                    value={task.title}
                                    onChange={(e) =>
                                        updateTask(task.id, {title: e.target.value})
                                    }
                                    className="inputField"
                                />
                            ) : (
                                <span>{task.title}</span>
                            )}
                            <button onClick={() => removeTask(task.id)}>❌</button>
                            {editingTaskId === task.id ? (
                                <button onClick={() => setEditingTaskId(null)}>Save</button>
                            ) : (
                                <button onClick={() => handleEdit(task.id)}>✏️ Edit</button>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No tasks added yet!</p>
                )}
            </div>
        </>
    );
};

export default AddTasks;
