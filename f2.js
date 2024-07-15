const fs = require('fs');

// Read the JSON files
let svJson = JSON.parse(fs.readFileSync('sv.json', 'utf8'));
const enJson = JSON.parse(fs.readFileSync('en.json', 'utf8'));

// Add keys from en.json that do not exist in sv.json
Object.keys(enJson).forEach(key => {
    if (!svJson.hasOwnProperty(key)) {
        svJson[key] = enJson[key];
    }
});

// Write the updated sv.json back to the file
fs.writeFileSync('sv.json', JSON.stringify(svJson, null, 2));