import * as serviceWorker from "./serviceWorker";

import { applyMiddleware, createStore } from "redux";

import App from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
