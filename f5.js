const fs = require('fs');

// Read the JSON files
const svJson = JSON.parse(fs.readFileSync('sv.json', 'utf8'));
const enJson = JSON.parse(fs.readFileSync('en.json', 'utf8'));

// List all lines that are identical in both files
console.log('Lines that are identical in both files: ');

Object.keys(svJson).forEach(key => {
    if (svJson[key] === enJson[key]) {
        console.log(`${key}: ${svJson[key]}`);
    }
});