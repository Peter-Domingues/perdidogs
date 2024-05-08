import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import formReducer from "./formReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  form: formReducer,
  counter: pageReducer,
  filters: filterReducer,
});

export default rootReducer;
