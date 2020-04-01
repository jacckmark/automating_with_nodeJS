const fs = require("fs");
// provides interface for reading data from stdin
const readline = require("readline");
const { stdin, stdout } = require("process");
const path = require("path");

// setup an interface connecting standard input and output
const interfaceInstance = readline.createInterface(stdin, stdout);

// function creating the project directory
const createProjectDirectory = enteredName => {
    // remove leading and trailing spaces
    const name = enteredName.trim();
    if (!name) {
        console.log(`Cannot create a project without a name`);
        process.exit(0);
    }
    const projectPath = path.join(__dirname, name);
    // don't create an directory that already exists
    if (fs.existsSync(projectPath)) {
        console.log(`${name} already exists`);
        process.exit(0);
    }
    console.log(`creating a new project called ${name}`);
    // creating an directory with user provided name
    fs.mkdirSync(projectPath);
};

const onProjectInput = name => {
    // closing the interface
    interfaceInstance.close();
    // destroying standard input
    stdin.destroy();
    createProjectDirectory(name);
};

// method question asks a question to stdout and expects an answer which in our
// case will be handled by the function onProjectInput()
interfaceInstance.question(`What is the name of your project?`, onProjectInput);
