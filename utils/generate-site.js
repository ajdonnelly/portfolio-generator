const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./src/style.css', './dist/style.css', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject({
            ok: false,
            message: 'Something went wrong!',
            err
          });
  
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  }
  // We're actually exporting an object with the two functions, writeFile() and copyFile(), used as methods, writeFile and copyFile.
  module.exports = { writeFile, copyFile };