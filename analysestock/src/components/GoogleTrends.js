import React from 'react';
import googleTrends from 'google-trends-api';
import queryString from 'query-string';
import nokiaData from '../nokia.json';
import BoardMembers from './BoardMembers';

class GoogleTrends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: nokiaData.companyDetailsList[0].values,
      googleQueries: null,
      googleTopics: null,
      ceoQueries: null
    };
  }

  componentDidMount() {
    const data = this.state.data;

    fetch(
      '/google-queries/' + encodeURIComponent(data.NIMI.replace(/oyj/i, ''))
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ googleQueries: JSON.parse(data) });
      });

    fetch('/google-topics/' + encodeURIComponent(data.NIMI.replace(/oyj/i, '')))
      .then(response => response.json())
      .then(data => {
        this.setState({ googleTopics: JSON.parse(data) });
      });

    fetch('/google-queries/' + encodeURIComponent(data.ceo_name))
      .then(response => response.json())
      .then(data => {
        this.setState({ ceoQueries: JSON.parse(data) });
      });
  }

  render() {
    const { googleQueries, googleTopics } = { ...this.state };
    if (!googleQueries || !googleTopics) {
      return <div>Loading...</div>;
    }

    console.log(googleQueries);
    console.log(googleTopics);
    const trendingQueries = googleQueries.default.rankedList[1].rankedKeyword;
    const trendingTopics = googleTopics.default.rankedList[1].rankedKeyword;

    return (
      <div>
        <ol>
          {trendingQueries.slice(0, 10).map(result =>
            <li key={result.query}>
              {result.query}
            </li>
          )}
        </ol>
        <ol>
          {trendingTopics.slice(0, 10).map(result =>
            <li key={result.topic.title}>
              {result.topic.title}
            </li>
          )}
        </ol>
        <BoardMembers ceoQueries={this.state.ceoQueries} />
      </div>
    );
  }
}

export default GoogleTrends;
