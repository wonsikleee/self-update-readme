// Include node fs (file stream)
const fs = require('fs');

function readWriteAsync() {
  // Update README using FS
  fs.readFile('README.md', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }

    // Update the README
    //const updatedReadMe = data.replace(
    //    "Test"
    //);
    let updatedReadMe = "Hello world."

    // Write the new README
    fs.writeFile('README.md', updatedReadMe, 'utf-8', (err) => {
      if (err) { 
        throw err;
      }

      console.log('README update complete.');
    });
  });
}

// Call the function
readWriteAsync();
