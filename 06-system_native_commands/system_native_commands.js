const { platform } = require("os");
const { exec } = require("child_process");

const WINDOWS_PLATFORM = "win32";

// gets user platform like wn32, linux etc.
const osPlatform = platform();
const args = process.argv.slice(2);
const [location] = args;

if (!location) {
    console.error(
        `Please enter an location, for example "home/Documents" (linux) or "C:" (windows)`
    );
    process.exit(0);
}

let command;

if (osPlatform === WINDOWS_PLATFORM) {
    command = `dir ${location}`;
} else {
    command = `ls ${location}`;
}

console.log(`executing command: ${command}`);
// is executing an command
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    // pushing result of running an command to standard output
    console.log(`stdout: ${stdout}`);
});
