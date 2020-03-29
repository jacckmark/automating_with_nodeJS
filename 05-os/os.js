// module that allows user to dig into hardware specs of a machine (like home
// directory etc.)
const os = require("os");

// homedir method gets user home directory
const homeDirectory = os.homedir();
console.log(`Your home directory is: ${homeDirectory}`);

// platform gets user OS platform
const osPlatform = os.platform();
console.log(`The OS platform is: ${osPlatform}`);

// os module can also determine the num of CPU cores or CPU model installed on
// the machine
const cpuCores = os.cpus();
const cpuModel = cpuCores[0].model;
const coreCount = cpuCores.length;
console.log(`Your cpu model is: ${cpuModel} and it has ${coreCount} cores`);
