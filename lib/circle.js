// This file contains the specific class for the Circle generation. This will be exteneded from the 'Shape' class

const Shape = require('./shapes');

class Circle extends Shape {
    render(){
        //Return SVG string for a circle 
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`; // call color input from promppt 
        
    }
}