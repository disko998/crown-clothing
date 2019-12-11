import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root.reducer";

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
  }) : compose;

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);
