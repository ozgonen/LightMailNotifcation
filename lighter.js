var SerialPort = require('serialport');
var port = new SerialPort("COM4", {
    baudRate: 9600
});

port.on('open', function() {
    console.log('PORT IS OPEN');
});

// open errors will be emitted as an error event 
port.on('error', function(err) {
    console.log('Error: ', err.message);
});

function lightThisBitchUp() {
    port.write('1', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    });
}

module.exports.lightThisBitchUp = lightThisBitchUp;
