import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CompanyData from "./components/CompanyData";

class App extends Component {
  render() {
    var contStyle = {
      background: "#00c4e0"
    };

    return (
      <div className="container" style={contStyle}>
        <CompanyData />
      </div>
    );
  }
}

export default App;
