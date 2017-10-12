var request = require('request');

module.exports = (location => {

  return new Promise((resolve, reject) => {
    var encodedLocation = encodeURIComponent(location);

    var url = `http://api.openweathermap.org/data/2.5/weather?appid=bf98e779b0b3314c8a312552cb5f61f3&q=${encodedLocation}&units=imperial`;

    if (!location) {
      reject('No location provided');
    }

    request({ url, json: true }, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(`It's ${body.main.temp} in ${body.name}`);
      }
    });
  });
});