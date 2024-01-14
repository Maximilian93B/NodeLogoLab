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
    }
}
module.exports = Shape

