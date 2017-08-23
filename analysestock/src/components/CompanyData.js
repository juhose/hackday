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
    var divStyle = {
      margin: "1%"
    };

    if (!this.state.data) {
      return (
        <div>
          <p>...loading...</p>
        </div>
      );
    }
    return (
      <div>
        <ul className="list-group" style={divStyle}>
          <li className="list-group-item">
            <span>Nimi: </span>
            <span>
              {this.state.data.NIMI}
            </span>
          </li>
          <li className="list-group-item">
            <span>Y-tunnus: </span>
            <span>
              {this.state.data.YTUNNUS}
            </span>
          </li>
          <li className="list-group-item">
            <span>Yritys perustettu: </span>
            <span>
              {this.state.data.YTUNNUS_ALKUPVM}
            </span>
          </li>
          <li className="list-group-item">
            <span>Kotipaikka: </span>
            <span>
              {this.state.data.KOTIPAIKKATXT}
            </span>
          </li>
          <li className="list-group-item">
            <span>Toimitusjohtaja: </span>
            <span>
              {this.state.data.TOIMITUSJOHTAJA}
            </span>
          </li>
          <li className="list-group-item">
            <span>Liikevaihto: </span>
            <span>
              {this.state.data.LIIKEVAIHTO}
            </span>
          </li>
          <li className="list-group-item">
            <span>Osakkeiden määrä: </span>
            <span>
              {this.state.data.OSAKKEIDENLKM}
            </span>
          </li>
          <li className="list-group-item">
            <span>Toimialakuvaus: </span>
            <span>
              {this.state.data.TOIMIALAKUVAUSTXT}
            </span>
          </li>
          <li className="list-group-item">
            <span>Hallituksen puheenjohtaja: </span>
            <span>
              {this.state.data.chairman_name}
            </span>
          </li>
          <li className="list-group-item">
            <span>Päätilintarkastaja: </span>
            <span>
              {this.state.data.auditor_name}
            </span>
          </li>
          <li className="list-group-item">
            <span>Tilintarkastaja: </span>
            <span>
              {this.state.data.auditing_company}
            </span>
          </li>
          <li className="list-group-item">
            <span>Johtoryhmä: </span>
            {this.state.data.membersOfTheBoard.map(memberOfTheBoard =>
              <span>
                {memberOfTheBoard.NIMI} <br />
              </span>
            )}
          </li>
        </ul>
        {!this.state.plotdat && <Chart data={this.state.plotdata} />}
      </div>
    );
  }
}

export default CompanyData;
