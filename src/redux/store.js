import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  tasks: [],
  filter: "",
};

const rootReducer = (state = initialState, action) => {
  console.log(action);

  if (action.type === "addTask") {
    state.tasks.push(action.payload);
    console.log(state.tasks);
  }
  console.log(state)
  return state;
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
