import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const url =
      'http://stock-api-staging.kauppalehti.media:80/api/stock/graph/NOKIA/ALL';

    fetch(url).then(response => response.json()).then(data => {
      this.setState({ data });
    });
  }

  render() {
    if (!this.state.data) {
      return <div>Loading...</div>;
    }

    return <div />;
  }
}

export default Graph;
