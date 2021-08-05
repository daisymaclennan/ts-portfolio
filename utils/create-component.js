require("colors");
const fs = require("fs");
const styledTemplate = require("./styledComponentTemplate");
const reactTemplate = require("./reactTemplate");
var inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'componentName',
    message: "Enter a valid component name:",
  },
  {
    type: 'list',
    name: 'componentType',
    message: 'Which template do you want to use?',
    choices: ['Styled Component', 'Plain React'],
    filter(val) {
      return val.replace(/\s+/g, '-').toLowerCase();
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log("Creating Component Templates with name: " + answers.componentName);

  const componentDirectory = `./components/${answers.componentName}`;

  if (fs.existsSync(componentDirectory)) {
    console.error(`Component ${answers.componentName} already exists.`.red);
    process.exit(1);
  }

  fs.mkdirSync(componentDirectory);

  var templates = reactTemplate;

  if(answers.componentType === 'styled-component'){
    templates = styledTemplate;
  }

  const generatedTemplates = templates.map((template) => template(answers.componentName));

  generatedTemplates.forEach((template) => {
    fs.writeFileSync(
      `${componentDirectory}/${answers.componentName}${template.extension}`,
      template.content
    );
  });

  console.log(
    "Successfully created component under: " + componentDirectory.green
  );
});