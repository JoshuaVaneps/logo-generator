// bringing in inquirer package
const inquirer = require("inquirer");
// bringing in inquirer max length element
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
// bringing in fs package
const fs = require("fs");
// bringing in the function
const generateLogo = require("./utils/generateLogo");

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "maxlength-input",
    message: "Enter logo text(3 characters max)",
    name: "text",
    maxLength: 3,
  },
  {
    type: "input",
    message:
      "What text color would you like?(please enter a color keyword or a hexidecimal number starting with #)",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape would you like? Pick from the options below ",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    message:
      "what color would you like the shape to be filled with?(please enter a color keyword or a hexidecimal number starting with #)",
    name: "shapeFill",
  },
];

//Created a function to write svg file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error
      ? console.error("Error appending to file:", error)
      : console.log("Data appended to file successfully.");
  });
}

//function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(`${answers.name}-logo.svg`, generateLogo(answers));
  });
}

//Function call to initialize app
init();
