// Import required packages
const fs = require('fs');
const inquirer = require('inquirer');

// Questions to generate the README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for using the project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license for the project:',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPL 3.0',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'LGPL 3.0',
            'AGPL 3.0',
            'MPL 2.0',
            'Unlicense',
            'None',
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// Function to generate the README content
const generateREADME = (answers) => `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions about the project, you can contact me directly at ${answers.email}. You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;

// Initialize the prompt
inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);

    // Write the README file
    fs.writeFile('generated/README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('README.md has been generated!')
    );
});
