const path = require("path");
const writeJson = require("./helpers/write_json");
const getJiraData = require("./helpers/get_jira_data");

const args = process.argv.slice(2);
const [ticket] = args;
// created with script new file name
const CONFIG_FILE = "config.json";
// if user does not pass an jiraTicket it will default to GS-1000
const jiraTicket = ticket || "GS-1000";
// "downloads" data from mock-jira-data file
const jiraData = getJiraData(jiraTicket);

if (!jiraData) {
    console.log(`JIRA ticket ${jiraTicket} not found.`);
    process.exit(0);
}

// path is creating the file paths based on operating system (linux, windows etc.),
// also using the __dirname global variable which is holding the full path to current
// directory
const newConfigFile = path.join(__dirname, "data", CONFIG_FILE);

// running writeJson function and writing to file (also handling situation if
// some error occurs like no internet if we are downloading the data etc.)
writeJson(newConfigFile, jiraData)
    .then(msg => console.log(msg))
    .catch(err => {
        throw err;
    });
