import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar/";
import Chat from "./Chat/";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <PrivateRoute path="/">
          <div
            className="container overflow-hidden"
            style={{ minWidth: "100%", height: "100vh" }}
          >
            <Header />
            <div className="row content">
              {window.innerWidth > 1000 ? <Sidebar /> : null}
              <Switch>
                <Route exact path="/room/:id">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </div>
        </PrivateRoute>
      </Switch>
    );
  }
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        window.localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
