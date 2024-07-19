import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MakeTask from './MakeTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskValue, setEditingTaskValue] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await axios.get('http://localhost:3001/api/tasks');
      setTasks(response.data);
    };
    getTasks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
    setCompletedTasks([...completedTasks, tasks.find(task => task._id === id)]);
  };

  const handleEdit = (task) => {
    setEditingTaskId(task._id);
    setEditingTaskValue(task.task);
  };

  const handleInputChange = (e) => {
    setEditingTaskValue(e.target.value);
  };

  const handleSave = async (id) => {
    await axios.put(`http://localhost:3001/api/tasks/${id}`, { task: editingTaskValue });
    setTasks(tasks.map(task => (task._id === id ? { ...task, task: editingTaskValue } : task)));
    setEditingTaskId(null);
  };

  const handleCreate = async (newTask) => {
    const response = await axios.post('http://localhost:3001/api/tasks', newTask);
    setTasks([...tasks, response.data]);
  };

  return (
    <div>
      <h1>To Do</h1>
      {tasks.map((task) => (
        <div key={task._id}>
          {editingTaskId === task._id ? (
            <input
              type="text"
              value={editingTaskValue}
              onChange={handleInputChange}
            />
          ) : (
            <h1>{task.task}</h1>
          )}
          {editingTaskId === task._id ? (
            <button type="button" onClick={() => handleSave(task._id)}>Save</button>
          ) : (
            <button type="button" onClick={() => handleEdit(task)}>Edit</button>
          )}
          <button type="button" onClick={() => handleDelete(task._id)}>Complete</button>
        </div>
      ))}
      <MakeTask onCreate={handleCreate} />
      <h1>Completed</h1>
      {completedTasks.map((task) => (
        <div key={task._id}>
          <h1>{task.task}</h1>
        </div>
      ))}
    </div>
  );
};

export default TaskList;