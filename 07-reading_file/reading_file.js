// this way we can require and parse in one step an json file
const { projectId, startDate, endDate } = require("./example_file.json");

console.log(`The ID of the project is ${projectId}. The startDate of this project 
is ${startDate} and this project is ending ${endDate}`);
