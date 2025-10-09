export const addTask = (task) => ({
  type: "addTask",
  payload: task,
});

export const removeTask = (taskId) => ({
  type: "removeTask",
  payload: taskId,
});

export const filterTask = (text) => ({
  type: "filterTask",
  payload: text,
});
