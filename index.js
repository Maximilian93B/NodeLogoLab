const inquirer = require('inquirer');
const fs = require('fs');


// Prompt using inquirer to display Array of input questions 

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo:',
        validate: input => input.length <= 3 && input.length > 0
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text', // will have to figure out a way for user to select color and validate input 
        //add validation for color choice 
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square']   
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape'
        //add color validation same as foor 'textColor'
    },
]).then(answers => {
    //Use input to generate SVG
})





function saveSVg(svgString, fileName = 'logo.svg') {
   
    try{
        // Used writeFileSync to save SVG synchronously
        fs.writeFileSync(fileName, svgString, "utf-8 ");
        // confirmation when write successful 
        console.log('${fileName} has been saved.');
    } catch(err) {
        console.error('An error has occured:', err);
    }
} 



function isColorValid(color) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(color) || ['red', 'green', 'blue', 'yellow','black','white'].includes(color.toLowerCase());
 
}  
