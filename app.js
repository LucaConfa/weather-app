var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
  .option('location',
    {
      demand: false,
      alias: 'l',
      describe: 'Enter Location',
      type: 'string'
    }).help('help')
  .argv;

if (typeof argv.l == 'string' && argv.l.length > 0) {

  weather(argv.l)
    .then(currentWeather =>{
      console.log(currentWeather);
    })
    .catch(error => {
      console.log(error);
    });

} else {

  location(location)
    .then(lct => {
      return weather(lct.city);
    })
    .then(currentWeather => {
      console.log(currentWeather);
    })
    .catch(error => {
      console.log('Unable to fetch location');
      console.log(error);
    });
}