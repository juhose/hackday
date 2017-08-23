import React, { Component } from "react";

class CompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(
      `http://tomcat-8700-test-1.kauppalehti.biz:8700/integration-companydata-1.16-SNAPSHOT/companydetails/json/1120390`
    )
      .then(result => result.json())
      .then(data => this.setState({ data: data.companyDetailsList.values }));
  }

  render() {
    if (!this.state.data) {
      return <div>...loading... </div>;
    }
    return (
      <ul>
        <li>
          <span>Nimi:</span>
          <span>
            {this.state.data.NIMI}
          </span>
        </li>
      </ul>
    );
  }
}

export default CompanyData;
