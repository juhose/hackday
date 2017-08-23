import React from 'react';
import googleTrends from 'google-trends-api';
import queryString from 'query-string';
import nokiaData from '../nokia.json';

export default function BoardMembers(props) {
  console.log('ceo', props.ceoQueries);
  const queries = props.ceoQueries.default.rankedList[1].rankedKeyword;

  return (
    <ol>
      {queries.slice(0, 10).map(result =>
        <li key={result.query}>
          {result.query}
        </li>
      )}
    </ol>
  );
}
