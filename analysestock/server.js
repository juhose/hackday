const express = require("express");
const app = express();
const googleTrends = require("google-trends-api");
const fetch = require("node-fetch");

<<<<<<< HEAD
app.get("/google-trends/:keyword", function(req, res) {
  googleTrends.relatedQueries({ keyword: "nokia", hl: "fi" }).then(data => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data));
  });
=======
app.get('/google-queries/:keywords', function(req, res) {
  googleTrends
    .relatedQueries({ keyword: req.params.keywords, hl: 'fi' })
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    });
});

app.get('/google-topics/:keywords', function(req, res) {
  googleTrends
    .relatedTopics({ keyword: req.params.keywords, hl: 'fi' })
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    });
>>>>>>> e8eb391aecaa51275d5d9a9f83d1f30625f4ec4d
});

app.get("/chart", function(req, res) {
  fetch(`http://stock-api-qa.kauppalehti.media:80/api/stock/history/nokia/ALL`)
    .then(result => result.json())
    .then(data => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(data));
    });
});
app.listen(3002, function() {
  console.log("Example app listening on port 3002!");
});
