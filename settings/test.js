var Gpio = require('onoff').Gpio;
var led4 = new Gpio(4, 'out');

led4.write(1)
