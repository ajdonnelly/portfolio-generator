//   always try to limit the functions and files to a single responsibility
/*The require statement is a built-in function that's globally available in 
Node.js. It allows the app.js file to access the fs module's functions through 
the fs assignment.*/

// const fs = require('fs');
const inquirer = require('inquirer');
// Notice that the function returns a running of inquire.prompt(), thus returning what it returns, which is a Promise. Just like fetch(), which we covered previously, the Promise will resolve with a .then() method.

/* So, here we're calling a function that returns the result of inquire.prompt, 
which is a Promise. We therefore append the .then() method to the function call, 
since it returns a Promise, and we put into .then() whatever we wish to take place 
after the Promise is resolved.*/
//these are the prompt user questions: 
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            // the validate method receives an argument-the user's input, nameInput.
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
        },
      
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: gitUserName => {
                if (gitUserName) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
          },
          {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
          }

    ]);
  };
  

//   these are the prompt project questions
  const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: projName => {
            if (projName) {
              return true;
            } else {
              console.log('Please enter the name of your project!');
              return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: projDesc => {
            if (projDesc) {
              return true;
            } else {
              console.log('Please enter a description of your project!');
              return false;
            }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: gitLink => {
            if (gitLink) {
              return true;
            } else {
              console.log('Please enter a description of your project!');
              return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
    
  };
  //run prompt user
  promptUser()
  //show prompt user answers
  .then(promptProject)
  //run project questions 
  .then(portfolioData => {
    console.log(portfolioData);
    });
  //show project question answers
//   .then(projectAnswers => console.log(projectAnswers));

/*because we added the module.exports statement at the end of the page-template.js 
file (with module.exports set to our generatePage() function), we can now use 
the require statement to include generatePage() at the top of the app.js file.*/

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(portfolioData);

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
// const profileDataArgs = process.argv.slice(2);

/*assignment destructuring. In basic terms, it assigns elements of an array 
to variable names in a single expression,*/
// const [name, github] = profileDataArgs;

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

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });