import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
const initialState = {
  tasks: [],
  filter: "",
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

    default:
      return state;
  }
};

export default rootReducer;

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
