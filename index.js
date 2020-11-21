const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const port = new SerialPort("/dev/tty.usbserial-1410", {
  baudRate: 115200,
});

const parser = new Readline();

port.pipe(parser);
parser.on("data", console.log);

port.on("open", () => {
  console.log("Port Open.");
  setTimeout(() => {
    port.write(`${"G28"}\n`);
  }, 5000);
});
