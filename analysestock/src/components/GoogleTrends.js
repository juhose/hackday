import React from 'react';
import googleTrends from 'google-trends-api';
import queryString from 'query-string';
import nokiaData from '../nokia.json';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: nokiaData.companyDetailsList[0].values,
      googleData: null
    };
  }

  componentDidMount() {
    const data = this.state.data;

    fetch(
      '/google-queries/' + encodeURIComponent(data.NIMI.replace(/oyj/i, ''))
    )
      .then(response => response.json())
      .then(data => {
        console.log(JSON.parse(data));
        this.setState({ googleData: JSON.parse(data) });
      });
  }

  render() {
    const googleData = this.state.googleData;
    if (!googleData) {
      return <div>Loading...</div>;
    }

    console.log(googleData);

    return (
      <ol>
        {googleData.default.rankedList[0].rankedKeyword
          .slice(0, 10)
          .map(result =>
            <li key={result.query}>
              {result.query}
            </li>
          )}
      </ol>
    );
  }
}

export default Graph;
