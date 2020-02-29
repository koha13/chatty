import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar/";
import Chat from "./Chat/";
import { Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
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
    );
  }
}
