import React from 'react';
import googleTrends from 'google-trends-api';
import queryString from 'query-string';
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

    // googleTrends
    //   .relatedQueries({ keyword: data.NIMI, hl: 'fi' })
    //   .then(queries => console.log(queries));
    // googleTrends
    //   .relatedTopics({ keyword: data.NIMI, hl: 'fi' })
    //   .then(topics => console.log(topics));

    const url = 'https://trends.google.com/trends/api/explore';
    const req = {
      comparisonItem: [
        {
          keyword: 'Nokia Oyj',
          hl: 'fi',
          category: 0,
          endTime: '2017-08-23T10:24:16.581Z',
          startTime: '2004-01-01T00:00:00.000Z',
          time: '2004-01-1 2017-08-23'
        }
      ],
      category: 0,
      property: ''
    };
    const opts = {
      hl: 'fi',
      tz: 300,
      req: JSON.stringify(req)
    };
    fetch('/google-trends/nokia')
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
