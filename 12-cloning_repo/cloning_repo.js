require("colors");
const path = require("path");
// lets user execute "normal" terminal commands in the nodejs script
const shell = require("shelljs");

// assigning the repositories obj from config.json to repositories variable
const { repositories } = require("./config");
// define the directory where to put cloned repositories
const repositoriesDirectory = path.join(__dirname, "my_repositories");

function cloneRepositories(repositoryPath, repositoryList = []) {
    const repositoryCount = repositoryList.length;
    // handling the situation when there is no repositories in config file
    if (!repositoryPath || !repositoryCount) {
        console.log(`Invalid path or repository list`);
        return;
    }
    console.log(`Cloning repositories to: ${repositoriesDirectory}`.blue);
    // running 'cd' command and moving to desired repository path
    shell.cd(repositoryPath);
    repositoryList.forEach((repositoryUrl, index) => {
        console.log(`Cloning ${index + 1} of ${repositoryCount}`.cyan);
        // cloning each repository into repository folder ('my_repositories')
        shell.exec(`git clone ${repositoryUrl} --progress -b master`);
    });
    console.log(`Completed cloning of repositories`.green);
}

cloneRepositories(repositoriesDirectory, repositories);
