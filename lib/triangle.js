// This file contains the specific class for the Triangle generation. This will be exteneded from the 'Shape' class 

const Shape = require('./shapes');


class Triangle extends Shape {
    renders() {
        //Render SVG string for s triangle 
        return `<polygon points="50,15 100,100 0,100" fill="${this.color}" />`; // call color input from prompt

    }
}