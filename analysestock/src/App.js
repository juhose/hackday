import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CompanyData from "./components/CompanyData";
import GoogleTrends from "./components/GoogleTrends";

class App extends Component {
  render() {
    var contStyle = {
      background: "#00c4e0"
    };

    return (
      <div>
        <div className="container" style={contStyle}>
          <CompanyData />
        </div>
        <GoogleTrends />
      </div>
    );
  }
}

export default App;
