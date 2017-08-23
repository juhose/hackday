import React from "react";
import PropTypes from "prop-types";
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryAxis,
  VictoryBrushContainer
} from "victory";

export default class Chart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({ selectedDomain: domain });
  }

  handleBrush(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    const chartStyle = { parent: { minWidth: "100%", marginLeft: "10%" } };
    console.log("new Date(1982, 1, 1)", new Date(1982, 1, 1));
    return (
      <div>
        <svg
          style={{
            background: "#ccdee8",
            boxSizing: "border-box",
            display: "inline",
            padding: 0,
            margin: 20,
            fontFamily: "'Fira Sans', sans-serif",
            width: "100%",
            height: "auto"
          }}
          viewBox="0 0 450 350"
        >
          <g transform={"translate(0, 40)"}>
            <VictoryLine
              style={{
                data: { stroke: "tomato" }
              }}
              data={this.props.data}
              domain={{
                x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                y: [2, 15]
              }}
              scale={{ x: "time", y: "linear" }}
              standalone={false}
              style={{ stroke: "#e95f46", strokeWidth: 2 }}
            />
          </g>
        </svg>
      </div>
    );
  }
}
