import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const saved = localStorage.getItem("tasks");
const savedTasks = saved ? JSON.parse(saved) : [];

const initialState = {
  tasks: savedTasks,
  filter: "all",
  filterText: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "removeTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "toggleTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "setFilter":
      return {
        ...state,
        filter: action.payload,
      };
    case "setFilterText":
      return {
        ...state,
        filterText: action.payload,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
});
