const fs = require('fs');

const sortJson = (filename) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
            const jsonData = JSON.parse(data);
            const sortedJsonData = {};
            Object.keys(jsonData).sort().forEach(key => {
                sortedJsonData[key] = jsonData[key];
            });

            fs.writeFile(filename, JSON.stringify(sortedJsonData, null, 4), (err) => {
                if (err) {
                    console.log(`Error writing file on disk: ${err}`);
                }
            });
        }
    });
}

sortJson('sv.json');