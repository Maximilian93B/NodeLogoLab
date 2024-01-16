// This file contains function responsible for creatinf the SVG. 

// Import classes from respective files 
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');
const Circle = require('../lib/circle');


// Function to generate SVG markup based on what the user inputs 
function generateSVG(shapeType, textColor, textContent, shapeColor) {
    let shape;

    // Determine which shape class to instantiate based on the shapeType input
    switch (shapeType.toLowerCase()) {
        case 'triangle':
            shape = new Triangle(shapeColor); // create a instance for each shape 
            break; // ensure there's a break statement after each case
        case 'circle':
            shape = new Circle(shapeColor);
            break;
        case 'square':
            shape = new Square(shapeColor);
            break;
        default:
            // Throw an error if the shapeType is not recognized
            throw new Error('Sorry that Shape Type wont work');
    }

    const svgMarkup = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}
        <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${textContent}
        </text>
    </svg>
`;

// Return the SVG markup as a string
return svgMarkup;
}

module.exports = generateSVG;
