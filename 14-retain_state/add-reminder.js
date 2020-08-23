const fs = require('fs');
require('colors');
const args = process.argv.slice(2);

const { JSON_WHITESPACE } = require('./constants');
const { reminders } = require('./.reminders');
let reminder = args[0];


if (reminder === undefined) {
    console.log(`Pass a reminder, for example 'pick up rabbit'`);
    process.exit(0);
}

reminder = reminder.trim();

// checking if there is such reminder in the list already
if (reminders.indexOf(reminder) > -1) {
    console.log(`Doh! Already have the reminder '${reminder}' set`);
    process.exit(0);
}

// adding new reminder to an array and writing whole array to the file
console.log(`You added '${reminder}'`.green);
reminders.push(reminder);
fs.writeFileSync(`${__dirname}/.reminders.json`, JSON.stringify({ reminders }, null, JSON_WHITESPACE));