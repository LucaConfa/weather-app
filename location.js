var request = require('request');
var url = 'http://ipinfo.io';


module.exports = (() => {
  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
});