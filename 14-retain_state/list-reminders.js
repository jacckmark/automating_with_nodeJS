const fs = require('fs');
require('colors');
const readLineSync = require('readline-sync');

const { JSON_WHITESPACE, NO_CHOICE_MADE } = require('./constants');
const { reminders } = require('./.reminders');

if (reminders.length === 0) {
    console.log('No reminders'.green);
    process.exit(0);
}

// waiting for user input to remove reminders that are not needed
const index = readLineSync.keyInSelect(reminders, 'What reminder have you dealt with?');

// if user selected 0 then no reminded is removed from list
if (index === NO_CHOICE_MADE) {
    process.exit(0);
}

// removing reminder from an array and writing new array to the file
console.log(`You removed '${reminders[index]}'`.red);
reminders.splice(index, 1);
fs.writeFileSync(`${__dirname}/.reminders.json`, JSON.stringify({ reminders }, null, JSON_WHITESPACE));