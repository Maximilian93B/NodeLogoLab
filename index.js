const inquirer = require('inquirer');
const fs = require('fs');
const { request } = require('http');

//Define shape classes = generateSVG --> (import from lib) 
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require ('./lib/square');
const generateSVG = require('./lib/svgGenerator');

// Prompt using inquirer to display Array of input questions 
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo:',
        validate: input => input.length <= 3 && input.length > 0
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Enter a color for the text', // will have to figure out a way for user to select color and validate input 
        choices: ['Red', 'Green', 'Blue']
        //add validation for color choice 
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square']   
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Enter a color for the shape',
        choices: ['Red', 'Green', 'Blue']
        //add color validation same as foor 'textColor'
    },
]).then(answers => {
    //Use input to generate SVG

    const svgString = generateSVG(answers.shape , answers.textColor, answers.text, answers.shapeColor);
    
    saveSVG(svgString);
})


function saveSVG(svgString, fileName = 'logo.svg') {
    try {
        // Used writeFileSync to save SVG synchronously
        fs.writeFileSync(fileName, svgString, 'utf-8');
        // confirmation when write successful 
        console.log('${fileName} has been saved.');
    } catch(err) {
        console.error('An error has occured:', err);
    }
} 


//Validation functions for user input 

// Color Validation 
function isColorValid(color) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(color) || ['red', 'green', 'blue', 'yellow','black','white'].includes(color.toLowerCase());
 
}  
