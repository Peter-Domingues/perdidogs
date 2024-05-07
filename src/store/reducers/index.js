import { combineReducers } from "redux";
import formReducer from "./formReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  form: formReducer,
  counter: pageReducer,
});

export default rootReducer;
