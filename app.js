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

  weather(argv.l, (currentWeather) => {
    console.log(currentWeather);
  });

} else {

  location((location) => {
    if (location) {

      weather(location.city, (currentWeather) => {
        console.log(currentWeather);
      });

    } else {

      console.log('Unable to guess location');

    }
  });

}