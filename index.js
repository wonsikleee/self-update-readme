// Include node fs (file stream) and https modules
const fs = require('fs');
const https = require('https');

// API endpoint
const url = 'https://dev.to/api/articles?username=<YOUR DEV USERNAME>';

function readWriteAsync() {
  // Update README using FS
  fs.readFile('README.md', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }

    // Replace text using regex: "I'm writing: ...replace... ![Build"
    // Regex101.com is a lifesaver!
    const updatedMd = data.replace(
      /(?<=I'm writing:\n)[\s\S]*(?=\!\[Build)/gim,
      articles
    );

    // Write the new README
    fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
      if (err) { 
        throw err;
      }

      console.log('README update complete.');
    });
  });
}

// Call the function
readWriteAsync();
