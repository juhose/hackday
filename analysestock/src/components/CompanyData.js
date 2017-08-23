import React, { Component } from "react";

class CompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const init = {
      method: "GET",
      mode: "cors",
      cache: "default"
    };
    // fetch(
    //   `http://tomcat-8700-test-1.kauppalehti.biz:8700/integration-companydata-1.16-SNAPSHOT/companydetails/json/1120390`,
    //   init
    // )
    //   .then(result => console.log(result))
    //   .then(data => this.setState({ data: data.companyDetailsList.values }));
    fetch(
      `http://stock-api-qa.kauppalehti.media:80/api/stock/history/nokia/ALL`,
      init
    )
      .then(result => console.log(result))
      .then(data => {
        console.log("data", data);
        this.setState({ plotdata: data });
      });
  }

  render() {
    console.log("state", this.state);
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
      </div>
    );
  }
}

export default CompanyData;
