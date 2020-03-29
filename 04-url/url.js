// url module is used to break down an url and extract information from it
const url = require("url");
const args = process.argv.slice(2);
const [urlEntered] = args;

if (!urlEntered) {
    console.error(
        `Please pass and URL that is valid one (like for example: 
            http://www.wp.com?myName=JackMark&myAge=90&comment=Yes+I+am+getting+older+and+older)`
    );
    process.exit(0);
}

// is simply parsing the user input (urlEntered) to few variables which are holding
// most of the info
const { protocol, slashes, host, query, href } = url.parse(urlEntered);
console.log(`Using protocol: ${protocol}`);
console.log(`Using slashes: ${slashes}`);
console.log(`Host: ${host}`);
console.log(`Query: ${query}`);
console.log(`HREF: ${href}`);
