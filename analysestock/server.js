const express = require('express');
const app = express();
const googleTrends = require('google-trends-api');

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
});

app.listen(3002, function() {
  console.log('Example app listening on port 3002!');
});
