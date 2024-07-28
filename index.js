constinqurer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

const questions = [
    {
        type: 'input',
        message: 'Enter 3 character for your logo:',  
        name: 'logoCharacter'
    },
    {
        type: 'input',
        message: 'what color would you like for your character:',
        name: 'charsColor'
    },
    {
        type: 'input',
        message: 'What shape would you like for your logo:',
        name: 'logoShape',
        choices:
         ['Triangle',
          'Square', 
          'Circle'],
    }
];

function generateHTML(data) {
    const {logoCharacter, charsColor, logoShape, shapeColor} = data;
    let logo = `<svg width="100" height="100"><text x="0" y="15" fill="${charsColor}">${logoCharacter}</text><rect width="100" height="100" fill="$logoShape}"/></svg>`;
    return logo;
};
    
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = 'assets/images/logo.svg'
        writeToFile(fileName, generateHTML(data));
    })
}
const {logoCharacter, charsColor, logoShape, shapeColor} = questions;

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success! Your logo has been created'));
}

const validateInput = (logoCharacter, charsColor, logoShape, shapeColor) => {
    if (logoCharacter.length > 3) {
        return 'Please enter 3 characters';
    }
    if (charsColor.length < 1) {
        return 'Please enter a color';
    }
    if (logoShape.length < 1) {
        return 'Please enter a shape';
    }
    if (shapeColor.length < 1) {
        return 'Please enter a color for your shape';
    }
    return true;
}


init();
validate[logoCharacter, charsColor, logoShape, shapeColor];
