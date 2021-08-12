/**-----------------------------------------------------------------------------
*  This was converted from the TCRead.py project by PiPlay.
*  I, Henry Hunt, adapted this for the MAGIS 100 project.
*  with the perpose of controling heating during the vaccum 
*  bake.
* 
*  This first section defines constants related to the PiPlay 
*  v1.3 board originally in the TC.py file.
*-----------------------------------------------------------------------------**/

// Commands for Thermocouple amplifier (MAX31856)

const CR0=0x00;
const CR1=0x01;
const MASK=0x02;
const CJHF=0x03;
const CJLF=0x04;
const LTHFTH=0x05;
const LTHFTL=0x06;
const LTLFTH=0x07;
const LTLFTL=0x08;
const CJTO=0x09;
const CJTH=0x0A;
const CJTL=0x0B;
const LTCBH=0x0C;
const LTCBM=0x0D;
const LTCBL=0x0E;
const SR=0x0F;

// Temperature conversion parameters.

const MAX31856_CONST_THERM_BITS = 19;
const MAX31856_CONST_THERM_LSB = 2**-7;
const MAX31856_CONST_CJ_BITS = 14;
const MAX31856_CONST_CJ_LSB = 2**-6;

// Mux Addressing
const MUX1_EN_PIN_NUM = 22;
const MUX2_EN_PIN_NUM = 26;

const MUX_A0_PIN_NUM = 24;
const MUX_A1_PIN_NUM = 28;
const MUX_A2_PIN_NUM = 29;

const FAULT_PIN_NUM = 23;
const READY_PIN_NUM = 21;
// Register Settings

// CR0
// CMODE 1SHOT OCFAULT1 OCFAULT0 CJ FAULT FAULTCLR 50/60Hz
const CMODE_OFF 	= 0b00000000;
const CMODE_AUTO 	= 0b10000000;
const ONESHOT		= 0b01000000;
const OCFAULT_DISABLE = 0b00000000;
const OCFAULT_ENLT5 	= 0b00010000;
const OCFAULT_EN40LT2 = 0b00100000;
const OCFAULT_EN40GT2 = 0b00110000;
const CJDISABLE 	= 0b00001000;
const FAULTINT 	= 0b00000100;
const FAULTCLR 	= 0b00000010;
const NR50HZ 		= 0b00000001;

// CR1
// Reserved AVGSEL 2 AVGSEL 1 AVGSEL 0 TC TYPE 3 TC TYPE 2 TC TYPE 1 TC TYPE 0

const SAMP_1		= 0b00000000;
const SAMP_2		= 0b00010000;
const SAMP_4		= 0b00100000;
const SAMP_8		= 0b00110000;
const SAMP_16		= 0b01000000;

const TYPE_B 		= 0b00000000;
const TYPE_E		= 0b00000001;
const TYPE_J		= 0b00000010;
const TYPE_K		= 0b00000011;
const TYPE_N		= 0b00000100;
const TYPE_R		= 0b00000101;
const TYPE_S		= 0b00000110;
const TYPE_T		= 0b00000111;
const VMODEGN8	= 0b00001000;
const VMODEGN16	= 0b00001100;

// MASK
const OPNFLTMSK	= 0b00111100;

// Useful Parameters
const ERRTEMP		= -6666;

/******************************************************************************
 * This next section setup the context for the tempature reading
 * including the SPI and GPIO interfaces for the TCAmp and MUX 
 * pins respectively.
 * 
 * It is not directly parallel to any of the code in TCRead.py,
 * but the TCRead.py function setupcommscontains the most simlar 
 * content.
 ******************************************************************************/

const spi = require("spi-device");
const Gpio = require("onoff").Gpio;


const TCAmp = spi.openSync(0,0, {mode: spi.MODE1, maxSpeedHz:7629}); // The SPI interface for the TC amp

const fault = new Gpio(FAULT_PIN_NUM, 'in');
const ready = new Gpio(READY_PIN_NUM, 'in');
const mux1En = new Gpio(MUX1_EN_PIN_NUM, 'out');
const mux2En = new Gpio(MUX2_EN_PIN_NUM, 'out');
const muxA0 = new Gpio(MUX_A0_PIN_NUM, 'out');
const muxA1 = new Gpio(MUX_A1_PIN_NUM, 'out');
const muxA2 = new Gpio(MUX_A2_PIN_NUM, 'out');



/******************************************************************************
* This next section is an adaptation of the TCspi.py file.  
* 
* It creates functions which simiplify the SPI interaction 
* with the TCAmp.
******************************************************************************/

function readreg(command){
    
}

function writereg(command, writeval){
    
}

function getTemp(){
    
}

function getCjTemp(){
    
}

/******************************************************************************
* This next section is an adaptation of the TCtempconvert.py file.
* 
* 
******************************************************************************/

function convertToCel(byte2, byte1, byte0){
    
}

function convertCjToCel(msb, lsb){
    
}

/******************************************************************************
*   
******************************************************************************/

var channel_status = [];

for (var channel = 0; channel < 17; channel++){
    store_setup(channel);
}

function store_setup(channel) {
    return null;
}
