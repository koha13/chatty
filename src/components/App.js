import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar/";
import Chat from "./Chat/";

export default class App extends React.Component {
  render() {
    return (
      <div
        className="container overflow-hidden"
        style={{ minWidth: "100%", height: "100vh" }}
      >
        <Header />
        <div className="row content">
          <Sidebar />
          <Chat />
        </div>
      </div>
    );
  }
}
