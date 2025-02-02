global.Buffer = require('buffer').Buffer;
global.process = require('process');

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:',
};

// Some modules expect userAgent to be a string
global.navigator.userAgent = 'React Native';

const { encode, decode } = require("base-64");
global.atob = decode;
global.btoa = encode;

global.process.version = "v16.0.0";
if (!global.process) {
  global.process = require("process");
  console.log({ process: global.process });
}