// this variable will store all data (as array) passed on calling our script to
// a script and also in it we can find :
// in a first place  address to node executable
// in a second place address to executed script
// this is good idea to remove first two elements from args array
const args = process.argv.slice(2);
// to access process id (PID) assigned to a program in system
const pid = process.pid;

if (args.length) {
    console.log(
        `Hello world!!! Hi ${args[0]} my friend! This program has ${pid} PID.`
    );
} else {
    console.log(
        "You have to pass some name in order to hear a greeting! BTW this program has ${pid} PID"
    );
    process.exit(0);
}

// here we are adding a callback to when the process ends (our program with assigned PID
// will cease to run). This code will not get triggered if we will run `process.exit()`
process.on("exit", code => {
    console.log(
        `The process with ${pid} PID has now finished to run. Exiting with code: ${code}.`
    );
});
