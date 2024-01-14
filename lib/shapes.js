// File containing class for shape, constructor

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(newColor) {
        this.color = newColor; 
    }

    render() {
        // Override in subclasses 

        return `<circle cx="150" cy="100" r="40" fill="${this.color}" />`;
    }
}
module.exports = Shape

