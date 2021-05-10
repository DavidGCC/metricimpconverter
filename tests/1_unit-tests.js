const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    suite("convertHandler tests for numbers", () => {

        test("convertHandler should correctly read a whole number", () => {
            const input = "123kg";
            assert.equal(convertHandler.getNum(input), 123);
        });

        test("convertHandler should correctly read a decimal number input", () => {
            const input = "1.23L";
            assert.equal(convertHandler.getNum(input), 1.23);
        });

        test("convertHandler should correctly read a fractional input", () => {
            const input = "2/4lbs";
            assert.equal(convertHandler.getNum(input), 0.5);
        });

        test("convertHandler should correctly read a fractional input with a decimal", () => {
            const input = "6.5/2km";
            assert.equal(convertHandler.getNum(input), 3.25);
        });

        test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", () => {
            const input = "3/2/3mi";
            assert.equal(convertHandler.getNum(input), "invalid number");
        });

        test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided", () => {
            const input = "gal";
            assert.equal(convertHandler.getNum(input), 1);
        });

    });

});