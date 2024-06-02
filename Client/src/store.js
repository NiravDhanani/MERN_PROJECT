import { applyMiddleware, createStore } from "redux";
import { Rootuser } from "./redux/reducer";
import {thunk} from "redux-thunk";

export const store = createStore(Rootuser, applyMiddleware(thunk));
