// importing the colors library does not require assigning it to a variable (it
// extends the String.prototype)
require("colors");

// importing the helper function for logging and our logging constants
const log = require("./helpers/log");
const { ERROR, WARNING, SUCCESS } = require("./helpers/message-types");

// this will result in printing message in color green etc.
console.log(`This is a success message`.green);
console.log(`This is a success message`.yellow);
console.log(`This is a success message`.grey);
console.log(`This is a success message`.blue);
console.log(`This is a success message`.red);

// using our custom logger from helpers
log(`This is a success message`, SUCCESS);
log(`This is a warning message`, WARNING);
log(`This is a error message`, ERROR);
log(`This is a info message`);
