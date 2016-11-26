const fs = require('fs');

var data = JSON.stringify({
    "Misha": "10000",
    "Masha": "1000",
});

fs.writeFile('z-db.json', data, (err) => {
    if (err) throw err;

    fs.rename('z-db.json', 'z-table.json', (err) => {
        if (err) throw err;

        fs.unlink('z-table.json', (err) => {
            if (err) throw err;
        });
    });
});