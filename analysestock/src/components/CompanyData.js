import React, { Component } from "react";
import nokiaData from "../nokia.json";
import Chart from "./Chart";

class CompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: nokiaData.companyDetailsList[0].values,
      plotdata: null
    };
  }

  componentDidMount() {
    fetch("/chart").then(result => result.json()).then(data => {
      const plotXY = data.entries.map(obj => {
        let x, y;
        return { x: new Date(obj.date), y: obj.dayHighPrice };
      });
      this.setState({ plotdata: plotXY });
    });
    /* fetch(
      `http://tomcat-8700-test-1.kauppalehti.biz:8700/integration-companydata-1.16-SNAPSHOT/companydetails/json/1120390`
    )
      .then(result => result.json())
      .then(data => this.setState({ data: data.companyDetailsList.values }));
      */
  }

  render() {
    console.log("this.state", this.state);
    if (!this.state.data) {
      return (
        <div>
          <p>...loading...</p>
        </div>
      );
    }
    return (
      <div>
        <ul>
          <li>
            <span>Nimi:</span>
            <span>
              {this.state.data.NIMI}
            </span>
          </li>
        </ul>
        {!this.state.plotdat && <Chart data={this.state.plotdata} />}
      </div>
    );
  }
}

export default CompanyData;
