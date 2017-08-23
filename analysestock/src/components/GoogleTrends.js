import React from 'react';
import googleTrends from 'google-trends-api';
import nokiaData from '../nokia.json';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: nokiaData.companyDetailsList[0].values
    };
  }

  componentDidMount() {
    const data = this.state.data;

    googleTrends
      .relatedQueries({ keyword: data.NIMI, hl: 'fi' })
      .then(queries => console.log(queries));
    googleTrends
      .relatedTopics({ keyword: data.NIMI, hl: 'fi' })
      .then(topics => console.log(topics));
  }

  render() {
    if (!this.state.data) {
      return <div>Loading...</div>;
    }

    return <div />;
  }
}

export default Graph;
