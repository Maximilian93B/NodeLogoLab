// This file contains the specific class for the Triangle generation. This will be exteneded from the 'Shape' class 

const Shape = require('./shapes');

class Triangle extends Shape {
    render() {
        // Scale up the size of the triangle
        return `<polygon points="100,30 200,200 0,200" fill="${this.color}" />`;
    }
}

module.exports = Triangle;