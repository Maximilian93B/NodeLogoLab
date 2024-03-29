// Will have to declare all shapes seperately as each shape has its own file
// I will comment on one test, all the test cases are the same. 

// Import shape you want to test using the (../././) format 
const Triangle = require('../triangle'); 
const Square = require('../square');
const Circle = require('../circle');

// Describe defines a test suite for Triangle 
describe('Triangle', () => {
    // Test for checking SVG generation 
    test('renders correct SVG markup', () => {
        // Create test case for triangle with the color 'red'
        const triangle = new Triangle('red');
        console.log("Triangle Matched!",triangle.render()); // Looking for output for trouble shooting 
        // test will expect SVG markup string to match Triangle Class in ('../lib/triangle')
        expect(triangle.render()).toBe(`<polygon points="100,30 200,200 0,200" fill="red" />`);
    });
});

describe('Square', ()=> {
    test ('renders correct SVG markup', () => {
        const square = new Square('red'); 
        console.log("Square Matched!",square.render());
        expect(square.render()).toBe('<rect width="200" height="200" fill="red" />');
    });
});

describe('Circle', ()=> {
    test('Renders correct SVG markup', () => {
        const circle = new Circle ('red');
        console.log("Circle Matched!",circle.render());
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="100" fill="red" />');
    });
});