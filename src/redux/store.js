import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import rootReducer from "./root-reducer";

// [logger] is just done for scaling: if you want to add any other middleware in future add to array
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //. ...middlewares spread array to function args.

export default store;
