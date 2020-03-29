// this is a standard nodeJS module which lets user do variety of changes to querystring
// (like for example changes the object to query string)
const querystring = require("querystring");

const apiHost = "https://jira.my-company.com/rest/api/latest/search?jql=";
const jqlParams = { assignee: "jack.mark", startAt: 2, maxResults: 2 };
// method stringify changes the object to query string
const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;
console.log(`My JQL api call is: ${apiUrl}`);

const url =
    "http://www.wp.com?myName=JackMark&myAge=90&comment=Yes+I+am+getting+older+and+older";
// method parse is parsing an url with query string and changing it to an object (starting
// from index of '?' sign)
const parsedUrl = querystring.parse(url.substring(url.indexOf("?") + 1));
console.log(
    `Hi my name is ${parsedUrl.myName}. I'm ${parsedUrl.myAge}. And ${parsedUrl.comment}`
);
