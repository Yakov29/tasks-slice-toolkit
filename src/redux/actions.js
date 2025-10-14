import { createAction } from "@reduxjs/toolkit";

// export const addTask = (task) => ({
//   type: "addTask",
//   payload: task,
// });

// export const removeTask = (taskId) => ({
//   type: "removeTask",
//   payload: taskId,
// });

// export const filterTask = (text) => ({
//   type: "filterTask",
//   payload: text,
// });

export const addTask = createAction("tasks/addTask", (task) => {
  return {
    type: "addTask",
    payload: task,
  };
});

export const removeTask = createAction("tasks/removeTask", (taskId) => {
  return {
    type: "removeTask",
    payload: taskId,
  };
});

export const filterTask = createAction("tasks/filterTask", (text) => {
  return {
    type: "filterTask",
    payload: text,
  };
});
