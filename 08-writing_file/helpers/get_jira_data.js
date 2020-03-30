const jiraData = require("../data/mock-jira-data");

// fetches data from file mock-jira-data (but it can get the data from website, API etc.)
const fetchDataFromJira = ticketNumber => jiraData[ticketNumber];

module.exports = fetchDataFromJira;
