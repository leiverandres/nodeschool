const http = require('http');
const async = require('async');
const fs = require('fs');

async.waterfall([
  function (cb) {
    fs.readFile(process.argv[2], function (err, data) {
      if (err) cb(err);
      cb(null, data.toString());
    });
  },
  function (url, cb) {
    var body = "";
    http.get(url.trimRight(), function(res) {
      res.on('data', function (chunk) {
        body += chunk.toString();
      });
      res.on('end', function() {
        cb(null, body);
      });
      res.on('error', function (err) {
        cb(err);
      });
    });
  }
], function (err, res) {
    if (err) return console.error(err);
    console.log(res);
});
