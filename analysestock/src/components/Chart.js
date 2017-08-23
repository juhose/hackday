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
        <VictoryChart
          width={1200}
          height={400}
          scale={{ x: "time" }}
          style={chartStyle}
          containerComponent={
            <VictoryZoomContainer
              responsive={false}
              dimension="x"
              zoomDomain={this.state.zoomDomain}
              onDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "tomato" }
            }}
            data={this.props.data}
          />
        </VictoryChart>
      </div>
    );
  }
}
