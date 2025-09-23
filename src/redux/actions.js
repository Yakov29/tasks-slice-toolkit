export const addTask = (value) => {
  return {
    type: "addTask",
    payload: {
      id: Date.now(),
      text: value,
      completed: false,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: "removeTask",
    payload: id,
  };
};
