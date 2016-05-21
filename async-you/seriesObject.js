var http = require('http');
var async = require('async');

async.series({
  requestOne: function (done) {
    fetchUrl(process.argv[2], done);
  },
  requestTwo: function (done) {
    fetchUrl(process.argv[3], done);
  }
}, function (err, results) {
    if (err) return console.error(err);
    console.log(results);
  }
);

function fetchUrl(url, done) {
  var body = "";
  http.get(url, function (res) {
    res.on('data', function (chunk) {
      body += chunk.toString();
    });
    res.on('error', function (err) {
      done(err);
    });
    res.on('end', function () {
      done(null, body);
    });
  });
}
