const spi = require("spi-device");

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


message = [{
	sendBuffer: Buffer.from([0x0c, 0x00, 0x00, 0x00]),
	receiveBuffer: Buffer.alloc(4),
	byteLength: 4
}]

TCAmp.transferSync(message)

console.log(message);


message = [{
	sendBuffer: Buffer.from([0x0a, 0x00, 0x00]),
	receiveBuffer: Buffer.alloc(3),
	byteLength: 3
}]

TCAmp.transferSync(message)

console.log(message);



