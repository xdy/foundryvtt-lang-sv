const fs = require('fs');

// Read the sv.json file
const svJson = JSON.parse(fs.readFileSync('sv.json', 'utf8'));

let result = {};

function flatten(data, path = '') {
    if (typeof data !== 'object' || data === null) {
        result[path] = data;
    } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            flatten(data[i], `${path}[${i}]`);
        }
    } else {
        for (let key in data) {
            flatten(data[key], path ? `${path}.${key}` : key);
        }
    }
}

flatten(svJson);

// Write result to a file
fs.writeFileSync('sv.json', JSON.stringify(result, null, 2));
