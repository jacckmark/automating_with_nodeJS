const fs = require("fs");

const JSON_WHITESPACE = 4;

// is removing file content and overwriting it with data passed
const writeJson = (file, contents) =>
    new Promise((resolve, reject) => {
        fs.writeFile(
            file,
            JSON.stringify(contents, null, JSON_WHITESPACE),
            err => {
                if (err) {
                    reject(err);
                }
                resolve(`${file} written`);
            }
        );
    });

module.exports = writeJson;
