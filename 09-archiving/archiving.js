// packages which are not part of main nodejs modules but are one of node module
// packages are imported in the same manner (the only difference is that we have
// to install them 'npm install name_of_package')
const archiver = require("archiver");
const fs = require("fs");
const path = require("path");

// compression level
const ZLIB_BEST_COMPRESSION = 9;
// path to zipped file
const zipPath = path.join(__dirname, "data/files.zip");
const output = fs.createWriteStream(zipPath);
const archive = archiver("zip", { zlib: { level: ZLIB_BEST_COMPRESSION } });
output.on("close", () => {
    console.log(`Total bytes: ${archive.pointer()}`);
    console.log(`archiving has now finished.`);
});
// error handling
archive.on("error", err => {
    throw err;
});

archive.pipe(output);
// preparing files paths for zipping
const textPath = path.join(__dirname, "data/copy.txt");
const logoPath = path.join(__dirname, "data/logo.jpg");
// naming files anew before appending to a zip
archive.append(fs.createReadStream(textPath), { name: "content.txt" });
archive.append(fs.createReadStream(logoPath), { name: "nobot.jpg" });
// finalizing the files compression
archive.finalize();
