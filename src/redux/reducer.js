const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

export const tasksReducer = (state = initialState, action,) => {
  switch (action.type) {
    case "addTask": {
      const newState = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    }

    case "removeTask": {
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    }

    case "filterTask" : {

      const oldState = JSON.parse(localStorage.getItem("tasks"))
      const newState = oldState.filter((task) => task.title === action.payload);
      console.log(action.payload)
      return newState
    }

    default:
      return state;
  }
};
