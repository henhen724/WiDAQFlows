const spi = require("spi-device");
const Gpio = require("onoff").Gpio;


const TCAmp = spi.openSync(0,0, {mode: spi.MODE1, maxSpeedHz:7629}); // The SPI interface for the TC amp

//const fault = new Gpio(FAULT_PIN_NUM, 'in');
//const ready = new Gpio(READY_PIN_NUM, 'in');
//const mux1En = new Gpio(MUX1_EN_PIN_NUM, 'out');
//const mux2En = new Gpio(MUX2_EN_PIN_NUM, 'out');
//const muxA0 = new Gpio(MUX_A0_PIN_NUM, 'out');
//const muxA1 = new Gpio(MUX_A1_PIN_NUM, 'out');

new Gpio(0, 'out');
new Gpio(1, 'out');
new Gpio(2, 'out');
new Gpio(3, 'out');
new Gpio(4, 'out');
new Gpio(5, 'out');
new Gpio(6, 'out');
// new Gpio(7, 'out'); 7 is illegal
// new Gpio(8, 'out'); 8 is illegal
new Gpio(9, 'out');
new Gpio(10, 'out');
new Gpio(11, 'out');
new Gpio(12, 'out');
new Gpio(13, 'out');
new Gpio(14, 'out');
new Gpio(15, 'out');
new Gpio(16, 'out');
new Gpio(17, 'out');
new Gpio(18, 'out');
new Gpio(19, 'out');
new Gpio(20, 'out');
new Gpio(21, 'out');
new Gpio(22, 'out');
new Gpio(23, 'out');
new Gpio(24, 'out');
new Gpio(25, 'out');
new Gpio(26, 'out');
new Gpio(27, 'out');
new Gpio(28, 'out');
// new Gpio(29, 'out'); 29 is illegal
new Gpio(30, 'out');
new Gpio(31, 'out');
new Gpio(32, 'out');
new Gpio(33, 'out');
new Gpio(34, 'out');
new Gpio(35, 'out');
new Gpio(36, 'out');
new Gpio(37, 'out');
new Gpio(38, 'out');
new Gpio(39, 'out');
new Gpio(40, 'out');
