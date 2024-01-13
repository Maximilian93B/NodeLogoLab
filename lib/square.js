// This file contains the specific class for the Square generation. 
//This will be exteneded from the 'Shape' class

const Shape = require('./shapes');


class Square extends Shape {
        render() {
    //Return SVG string for a square 
        return `<rect width="80" height="80" fill="${this.color}" />`; // call color from prompt 
    }
}