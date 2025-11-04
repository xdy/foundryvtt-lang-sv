// remove-extra-keys.js
const fs = require('fs');

const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));
const sv = JSON.parse(fs.readFileSync('sv.json', 'utf8'));

const result = {};
Object.keys(sv).forEach(key => {
    if (en.hasOwnProperty(key)) {
        result[key] = sv[key];
    }
});

fs.writeFileSync('sv.json', JSON.stringify(result, null, 2), 'utf8');
console.log('sv.json cleaned.');
