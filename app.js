//   always try to limit the functions and files to a single responsibility
/*The require statement is a built-in function that's globally available in 
Node.js. It allows the app.js file to access the fs module's functions through 
the fs assignment.*/
const fs = require('fs');

/*because we added the module.exports statement at the end of the page-template.js 
file (with module.exports set to our generatePage() function), we can now use 
the require statement to include generatePage() at the top of the app.js file.*/
const generatePage = require('./src/page-template.js');

/* process is a global object that represents everything going on with this particular app.
 The argv property of process is an array that holds exactly 
 what was typed into the command line upon execution so that we can capture 
 that data and use it in the app.*/ 
 /*so this is taking whatever the user puts into the command line then slicinging it out and 
 saving it in a variable*/
 /*use an array method to create a new array with everything that comes after process.argv[1]. 
 In this case, process.argv[0] is the node file location, process.argv[1] is the file that's 
 being executed, app.js. So we want to start capturing user data put into the command line but
 excluding these first to array objects*/
 /*used the array method .slice() to return a brand-new array 
 based on process.argv starting at the third index (i.e., index 2 in the zero-based array), 
 and ending with the final index.*/
const profileDataArgs = process.argv.slice(2);

/*assignment destructuring. In basic terms, it assigns elements of an array 
to variable names in a single expression,*/
const [name, github] = profileDataArgs;

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//       profileDataArr.forEach(profileItem => console.log(profileItem));
//     }
//   };

// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };

/*The first argument is the file name that will be created, or the 
output file. The second argument is the data that's being written: the 
HTML string template. The third argument is the callback function that will 
handle any errors as well as the success message.*/
  fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });