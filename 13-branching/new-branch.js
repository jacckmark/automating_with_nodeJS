const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
const { repository } = require('./config');
const { delivery, baseBranch } = repository;

const repoName = delivery.substring(delivery.lastIndexOf('/'));
const repoPath = path.join(__dirname, repoName);

shell.cd(repoPath);
// checkouting to the basebranch defined in our config
shell.exec(`git checkout ${baseBranch}`);

// prompting the user for data (here ticket ID)
const ticketId = readLineSync.question(`What is the ticket ID? `, {
    // this is an property which checks if the user input is meeting the validation 
    // requirements
    limit: input => input.trim().length > 0,
    // if the user will not meet the requirements (specified in limit) this message
    // will be shown
    limitMessage: `Please enter a ticket ID (e.g. GOT-123)`
});

// now we are creating a new branch based on user
shell.exec(`git checkout -b ${ticketId}`);