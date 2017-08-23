const express = require('express');
const app = express();
const googleTrends = require('google-trends-api');

app.get('/google-trends/:keyword', function(req, res) {
  googleTrends.relatedQueries({ keyword: 'nokia', hl: 'fi' }).then(data => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  });
});

app.listen(3002, function() {
  console.log('Example app listening on port 3002!');
});
