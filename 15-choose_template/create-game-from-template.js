const fs = require('fs');
require('colors');
const readLineSync = require('readline-sync');
const path = require('path');
const fse = require('fs-extra');

const GAME_TEMPLATES = 'game-templates';
const NO_CHOICE_MADE = -1;

const templatesDir = path.join(__dirname, GAME_TEMPLATES);
// use already build template to create a new one
const templates = fse.readdirSync(templatesDir);

const index = readLineSync.keyInSelect(templates);

if (index === NO_CHOICE_MADE) {
    process.exit(0);
}

// we prompt user for new game template name
const projectName = readLineSync.question('What is the name of your game? ', {
    limit: input => input.trim().length > 0,
    limitMessage: 'The project has to have a name, try again!'
});

// asking if the passed in previous step game name is correct
const confirmCreateDirectory = readLineSync.keyInYN(`You entered ${projectName}, create directory with this name?`);

if (confirmCreateDirectory) {
    const template = templates[index];
    const src = path.join(templatesDir, template);
    const destination = path.join(__dirname, GAME_TEMPLATES, projectName);
    // we copy the chosen template to new destination based on templates dir and new name
    // copy returns a promise so we can resolve it and catch error if needed 
    fse.copy(src, destination)
        .then(() => console.log(`Successfully created ${destination}`.green))
        .catch(err => console.err(err))
} else {
    console.log('Aborted creating new game');
}