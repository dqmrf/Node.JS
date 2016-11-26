var fs = require('fs');

// -> 1
fs.watch(__dirname, function(eventType, filename){
    console.log(`event type is: ${eventType}`);

    if (filename) {
        console.log(`filename provided: ${filename}`);
    } else {
        console.log('filename not provided');
    }
});

// -> 2
fs.watchFile('test.md', (curr, prev) => {
    console.log(curr);
    console.log(prev);
});

// -> 3
fs.watch('.', {encoding: 'utf-8', recursive: true}, (eventType, filename) => {
  if (filename)
    console.log(filename);
    // Prints: <Buffer ...>
});