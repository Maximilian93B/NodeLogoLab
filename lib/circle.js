// This file contains the specific class for the Circle generation. This will be exteneded from the 'Shape' class

const Shape = require('./shapes');

class Circle extends Shape {
    render(){
        //Return SVG string for a circle 
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`; // call color input from promppt 
        
    }
}

module.exports = Circle;