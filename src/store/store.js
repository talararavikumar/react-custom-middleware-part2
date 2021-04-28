import { createStore } from "redux";
import reducer from "./reducer";
import loggingmiddleware from "./loggingmiddleware";

const store = createStore(reducer, loggingmiddleware);
export default store;
