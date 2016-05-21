var http = require('http');
var async = require('async');

var opts = {
  hostname: process.argv[2],
  port: process.argv[3],
  path: '/users/create',
  method: 'POST',
};

var postData = {
  'user_id': 0
};

var req = http.request(opts, function (res, cb) {

});

async.series({
  post: function (done) {
    async.times(5, function (id, next) {
      next(err);
    }, function (err, users) {
      if (err) return done(err);
      done(null, 'saved');
    });
  },
  get: function (done) {
    http.get(url + '/users', function (res) {
      body = ""
      res.on('data', function (chunk) {
        body += chunk.toString();
      });
      res.on('error', function (err) {
        done(err);
      });
      res.on('end', function () {
        done(null, body);
      });
    })
  }
}, function (err, result) {
  if (err) return console.log(err);
  console.log(result.get);
})
