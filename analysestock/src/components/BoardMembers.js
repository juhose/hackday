import React from "react";
import googleTrends from "google-trends-api";
import queryString from "query-string";
import nokiaData from "../nokia.json";

export default function BoardMembers(props) {
  console.log("ceo", props.ceoQueries);
  const queries = props.ceoQueries.default.rankedList[1].rankedKeyword;

  return (
    <div className="col-sm-3">
      <div style={{ background: "#f7f7f7", height: "50px" }}>
        <h4 style={{ padding: 10 }}>Toimitusjohtajaan liittyvät haut</h4>
      </div>
      <ol className="list-group">
        {queries.slice(0, 10).map(result =>
          <li className="list-group-item" key={result.query}>
            {result.query}
          </li>
        )}
      </ol>
    </div>
  );
}
