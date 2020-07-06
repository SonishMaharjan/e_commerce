import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import rootReducer from "./root-reducer";

//this hepl i caching data in browser
import { persistStore } from "redux-persist";

// [logger] is just done for scaling: if you want to add any other middleware in future add to array
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //. ...middlewares spread array to function args.

export const persistor = persistStore(store);

export default { store, persistor };
