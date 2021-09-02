const Gpio = require('onoff').Gpio;

const MUX1_EN_PIN_NUM = 6;
const MUX2_EN_PIN_NUM = 12;

const MUX_A0_PIN_NUM = 19;
const MUX_A1_PIN_NUM = 20;
const MUX_A2_PIN_NUM = 21;


const mux1En = new Gpio(MUX1_EN_PIN_NUM, 'out');
const mux2En = new Gpio(MUX2_EN_PIN_NUM, 'out');
const muxA0 = new Gpio(MUX_A0_PIN_NUM, 'out');
const muxA1 = new Gpio(MUX_A1_PIN_NUM, 'out');
const muxA2 = new Gpio(MUX_A2_PIN_NUM, 'out');


function sleep(ms) {
    return new Promise((accept, reject) => setTimeout(accept, ms));
}


async function setMuxAddr(channel) {
    var address = channel & 0x0F;
    // use the leading digit to determine weather the channel 
    // is on the first or second mux
    mux1En.writeSync(Number(!(address & (1 << 3))));
    mux2En.writeSync(Number(!!(address & (1 << 3))));

    console.log(`Set the Mux to ${mux2En.readSync()} ${mux1En.readSync()}`);
    console.log(`Should be ${!!(address & (1 << 3))} ${!(address & (1 << 3))}`);
    // now using the least sigificant bits to get the mux input bits
    muxA2.writeSync(Number(!!(address & (1 << 2))));
    muxA1.writeSync(Number(!!(address & (1 << 1))));
    muxA0.writeSync(Number(!!(address & 1)));
    console.log(`Set the Mux Address to ${muxA2.readSync()} ${muxA1.readSync()} ${muxA0.readSync()}`)
}


setMuxAddr(0);
