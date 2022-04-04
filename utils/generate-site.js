const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                return
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile()
        .then(copyFileResource => {
            if (err) {
                reject(err);
                return
            }

            resolve({
                ok: true,
                message: 'File Copied!'
            });

            console.log(copyFileResource);
        });
    });
};

module.exports = { writeFile, copyFile };