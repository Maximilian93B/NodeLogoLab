// Will have to declare all shapes seperately as each shape has its own file 
// I will comment on one test, all the test cases are the same. 

// Import shape you want to test using the (../././) format 
const Triangle = require('../lib/triangle'); 
const Square = require('../lib/square');
const Circle = require('../lib/circle');

// Describe defines a test suite for Triangle 
describe('Triangle', () => {
    // Test for checking SVG generation 
    test('renders correct SVG markup', () => {
        // Create test case for triangle with the color 'red'
        const triangle = new Triangle('red');
        // test will expect SVG markup string to match Triangle Class in ('../lib/triangle')
        expect(triangle.render()).toBe('<polygon points="50,15 100,100 0,100" fill="red" />');
    });
});

describe('Square', ()=> {
    test ('renders correct SVG markup', () => {
        const square = new Square('red'); 
        expect(squarequare.render()).toBe('<rect width="80" height="80" fill="red" />');
    });
});

describe('Circle', ()=> {
    test('Renders correct SVG markup', () => {
        const circle = new Circle ('red');
        expect(circle.render()).toBe('<circle cx="50" cy="50" r="40" fill="red" />');
    });
});