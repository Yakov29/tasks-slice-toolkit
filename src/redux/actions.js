export const addTask = (text) => ({
  type: "addTask",
  payload: {
    id: Date.now(),
    text: text || "",
    completed: false,
  },
});

export const removeTask = (id) => ({ type: "removeTask", payload: id });
export const toggleTask = (id) => ({ type: "toggleTask", payload: id });
export const setFilter = (filter) => ({ type: "setFilter", payload: filter });
export const setFilterText = (text) => ({ type: "setFilterText", payload: text });
