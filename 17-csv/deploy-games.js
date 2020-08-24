require('colors');
const path = require('path');
const { stdout } = require('process');
const parse = require('csv-parse');
const transform = require('stream-transform');
const fs = require('fs');

const DELAY_TIME = 500;
const CSV_FILE = 'game-releases.csv';
const parser = parse({ delimiter: ',' });
const gameReleasesPath = path.join(__dirname, CSV_FILE);
// creating the stream to read a csv file
const input = fs.createReadStream(gameReleasesPath);
let iterator = 1;

const processRecord = (record, callback) => {
    const [game, template] = record;
    let message = `Deploying game ${iterator} '${game}' with template: '${template}'`;
    // we color the console messages odd blue and even green
    message = (iterator % 2 === 0) ? message.bgGreen : message.bgBlue;
    iterator += 1;
    // timeout is for show only because this way the script looks more real when 
    // running
    setTimeout(() => {
        callback(null, `${message}\n`)
    }, DELAY_TIME);
}

// passing the processRecord callback to the function transform
const transformer = transform(processRecord);

// we read the csv file line
input
    // we send the data to the parser
    .pipe(parser)
    // parsed data gets moved to the transformer
    .pipe(transformer)
    // the transformer moves data to standard output
    .pipe(stdout);