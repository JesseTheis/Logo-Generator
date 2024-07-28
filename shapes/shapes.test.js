
const {triangle, square, circle} = require('./shapes');

describe('triangle', () => {
    it('should render a triangle with a red background color', () => {
        const testTriangle = new triangle();
        testTriangle.setColor('red');
        const expectedOutput = '<polygon points="50,0 100,100 0,100" fill="red" />';
        expect(testTriangle.render()).toEqual(expectedOutput);
    });
});

describe('square', () => {
    it('should render a square with a blue background color', () => {
        const testSquare = new square();
        testSquare.setColor('blue');
        const expectedOutput = '<rect width="100" height="100" fill="blue" />';
        expect(testSquare.render()).toEqual(expectedOutput);
    });
});