var calculator = require("../app/calculator");
var assert = require("chai").assert;


describe("sub", () =>{
    function makeTest(i, j) {
        let expectPass = i - j;
        let expectFail = i - j + 2;

        it(`sub(${i},${j}) expected result ${expectPass} PASS`, () => {
            assert.equal(calculator.sub(5, 2), expectPass);
        })

        it(`add(${i},${j}) expected result ${expectFail} FAIL`, () => {
            assert.equal(calculator.sub(5, 2), expectFail);
        })
    }

    let i = 5
    let j = 2
    makeTest(i, j);
})

describe("add", () =>{
    function makeTest(i, j) {
        let expectPass = i + j;
        let expectFail = i + j + 1;

        it(`add(${i},${j}) expected result ${expectPass} PASS`, () => {
            assert.equal(calculator.add(5, 2), expectPass);
        })

        it(`add(${i},${j}) expected result ${expectFail} FAIL`, () => {
            assert.equal(calculator.add(5, 2), expectFail);
        })
    }

    let i = 5
    let j = 2
    makeTest(i, j);
})

describe("div", () =>{
    function makeTest(i, j) {
        let expectPass = i / j;
        let expectFail = i / j - 3;

        it(`div(${i},${j}) expected result ${expectPass} PASS`, () => {
            assert.equal(calculator.div(10, 2), expectPass);
        })

        it(`div(${i},${j}) expected result ${expectFail} FAIL`, () => {
            assert.equal(calculator.div(10, 2), expectFail);
        })
    }

    let i = 10
    let j = 2
    makeTest(i, j);
})

describe("mul", () =>{
    function makeTest(i, j) {
        let expectPass = i * j;
        let expectFail = i * j + 2;

        it(`mul(${i},${j}) expected result ${expectPass} PASS`, () => {
            assert.equal(calculator.mul(5, 2), expectPass);
        })

        it(`mul(${i},${j}) expected result ${expectFail} FAIL`, () => {
            assert.equal(calculator.mul(5, 2), expectFail);
        })
    }

    let i = 5
    let j = 2
    makeTest(i, j);
})
