//   creates the template literal
const generatePage = (name, github) => {
    // string template
    /* interpolate the command-line arguments into the HTML using ${name} and ${github}.*/
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

// In order to use functions from one module inside another, 
// we use the related statements module.exports and require.
module.exports = generatePage;
