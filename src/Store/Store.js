import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const Store = () => {
  const store = createStore(
    combineReducers({
      userList: userReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default Store;
