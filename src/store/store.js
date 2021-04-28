import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import loggingmiddleware from "./loggingmiddleware";
const createStoreWithMiddleware = applyMiddleware(loggingmiddleware)(
  createStore
);

const store = createStoreWithMiddleware(reducer);

export default store;
