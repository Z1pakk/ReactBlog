import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import registerServiceWorker from "./registerServiceWorker";
import createRootReducer from "./rootReducer";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { userLoggedIn } from "./actions/auth";
import {
  ConnectedRouter,
  routerMiddleware
} from "connected-react-router/immutable";
import jwt from "jsonwebtoken";
import { createBrowserHistory } from "history";
import Loader from "./common/Loader";

const App=lazy(()=>import("./App"));

const history = createBrowserHistory();

const rootElement = document.getElementById("root");

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);

  if (localStorage.jwtToken != null) {
    let jwtTokenDecode = jwt.decode(localStorage.jwtToken);
    store.dispatch(
      store.dispatch(
        userLoggedIn({
          email: jwtTokenDecode.email,
          isAdmin: jwtTokenDecode.isAdmin,
          isTeacher: jwtTokenDecode.isTeacher
        })
      )
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<Loader />}>
          <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  rootElement
);

registerServiceWorker();
