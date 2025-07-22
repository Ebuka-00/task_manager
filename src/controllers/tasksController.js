import tasks from '../models/taskModel.js';

// GET all tasks
export const getAllTasks = (req, res) => {
  res.status(200).json({ success: true, data: tasks });
};

// GET one task by ID
export const getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }
  res.json({ success: true, data: task });
};

// POST new task
export const createTask = (req, res) => {
  const { title, completed } = req.body;
  const newTask = {
    id: Date.now(),
    title,
    completed: Boolean(completed)
  };
  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
};

// PUT update task
export const updateTask = (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }
  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;
  res.json({ success: true, data: task });
};

// DELETE task
export const deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }
  const deleted = tasks.splice(index, 1)[0];
  res.json({ success: true, message: 'Task deleted', data: deleted });
};
