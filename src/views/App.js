import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/";
import Chat from "../components/Chat/";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import PrivateRoute from "./PrivateRoute";
import SignupScreen from "./Signup";
import AddRoom from "./AddRoom/AddRoom";
import RightSide from "../components/RightSide/";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/signup" exact>
          <SignupScreen />
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
                <Route exact path="/room/:idRoom">
                  <Chat />
                  <RightSide />
                </Route>
                <Route exact path="/addroom">
                  <AddRoom />
                </Route>
              </Switch>
            </div>
          </div>
        </PrivateRoute>
      </Switch>
    );
  }
}
