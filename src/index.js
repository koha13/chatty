import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import store from "./redux/store";
import { persistor } from "./redux/store";

import App from "./views/App";
import { Provider } from "react-redux";
import Loading from "./components/Loading";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
