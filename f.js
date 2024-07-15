const fs = require("fs");

// Read the files
const svJSON = JSON.parse(fs.readFileSync('sv.json', 'utf8'));
const enJSON = JSON.parse(fs.readFileSync('en.json', 'utf8'));

// Filter out keys that do not exist in enJSON
const filteredSvJSON = Object.keys(svJSON)
    .filter(key => key in enJSON)
    .reduce((obj, key) => {
        obj[key] = svJSON[key];
        return obj;
    }, {});

// Write the filtered sv.json back to the file
fs.writeFileSync('sv.json', JSON.stringify(filteredSvJSON, null, 2));