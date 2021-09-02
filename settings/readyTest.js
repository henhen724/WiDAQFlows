const spi = require("spi-device");
const Gpio = require("onoff").Gpio;

const ready = new Gpio(5, 'in');

const TCAmp = spi.openSync(0,0, {mode: spi.MODE1, maxSpeedHz:7629});

var message = [{
	sendBuffer: Buffer.from([0x82, 0b00111100]),
	receiveBuffer: Buffer.alloc(2),
	byteLength: 2
}]

TCAmp.transferSync(message)

console.log(message);


message = [{
	sendBuffer: Buffer.from([0x81, 0b00100000 | 0b00000011]),
	receiveBuffer: Buffer.alloc(2),
	byteLength: 2
}]

TCAmp.transferSync(message)

console.log(message);


message = [{
	sendBuffer: Buffer.from([0x01, 0x00]),
	receiveBuffer: Buffer.alloc(2),
	byteLength: 2
}]

TCAmp.transferSync(message)

console.log(message);


message = [{
	sendBuffer: Buffer.from([0x80, 0b01010000]),
	receiveBuffer: Buffer.alloc(2),
	byteLength: 2
}]

TCAmp.transferSync(message)

console.log(message);

const sleep = (ms) => new Promise(acc => setTimeout(acc, ms));

sleep(0).then(async () => {

console.log(`NOT READY ? ${ready.readSync()}`);

message = [{
	sendBuffer: Buffer.from([0x0c, 0x00, 0x00, 0x00]),
	receiveBuffer: Buffer.alloc(4),
	byteLength: 4
}]

TCAmp.transferSync(message)

console.log(message);



function convertToCel(tempBuffer) {
	const sign = -1 * Number(!!(tempBuffer[1] & 1 << 7)) + Number(!(tempBuffer[1] & 1 << 7));
	const HighByte = (tempBuffer[1] & 0b01111111) << 4;
	const MidByte = tempBuffer[2]*Math.pow(2, -4);
	const LowByte = (tempBuffer[3] & 0b11100000)*Math.pow(2, -12);

	console.log(`Sign ${sign} High Byte ${HighByte} Mid Byte ${MidByte} Low Byte ${LowByte}`);

	return sign*(HighByte + MidByte + LowByte);
}

console.log(convertToCel(message[0].receiveBuffer));


message = [{
	sendBuffer: Buffer.from([0x0a, 0x00, 0x00]),
	receiveBuffer: Buffer.alloc(3),
	byteLength: 3
}]

TCAmp.transferSync(message)

console.log(message);


function convertCjToCel(tempBuffer){
	const sign = -1 * Number(!!(tempBuffer[1] & 1 << 7)) + Number(!(tempBuffer[1] & 1 << 7));
	const HighByte = tempBuffer[1] & 0b01111111;
	const LowByte = tempBuffer[2]*Math.pow(2, -8);

	console.log(`Sign ${sign} High Byte ${HighByte} Low Byte ${LowByte}`);

	return sign*(HighByte + LowByte);
}

console.log(convertCjToCel(message[0].receiveBuffer));


message = [{
	sendBuffer: Buffer.from([0x0f, 0x00]),
	receiveBuffer: Buffer.alloc(2),
	byteLength: 2
}]

TCAmp.transferSync(message)

console.log(message);



});

