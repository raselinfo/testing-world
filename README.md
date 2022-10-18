# Welcome To Our Testing World 🧪

## Test Runner 🏃

As the name suggests, Test Runner is a tool that is used to run or execute tests and export results. It is a library that selects the source code directory and picks the test files to run them for verifying bugs and errors

- Runs your tests (i.e.,)
- Automatically detects testing code
- Displays results
- e.g Jest, Karma

## Assertion Library 📚

Assertion libraries are tools to verify that things are correct. This makes it a lot easier to test your code, so you don't have to do thousands of if statements.

- Used to define expected outcomes
- Checks whether expectations are met
- Supports all kinds of expectations and modes (sync/ async)
- e.g., Jest,Chai

## Test Pattern

The AAA (Arrange-Act-Assert) pattern has become almost a standard across the industry. It suggests that you should divide your test method into three sections: arrange, act and assert. Each one of them only responsible for the part in which they are named after

1. AAA- Arrange,Act,Assert
   1. A(Arrange) : Define the testing environment and values
   2. A(Act) : Run the actual code / function that should be tested
   3. A(Assert) : Evaluate the produced value / result and compare it to the expected value / result

```js
import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3, 4];
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResult);
});
```

## Vitest

<a href="https://vitest.dev/">Vitest</a> Blazing Fast Unit Test Framework

```js
yarn add -D vitest

// package.json
"scripts": {
    "test": "vitest --globals"
  },
```

**Sample Test**

```js
import { it, expect } from "vitest";
import { add } from "./math";

it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3, 4]
    const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0)
    // Act
    const result = add(numbers)
    // Assert
    expect(result).toBe(expectedResult)
})

it("should yield NaN if a least one invalid number is provide", () => {
    // Arrange
    const inputs = ['string', 5, true, undefined, null, NaN]
    // Act
    const result = add(inputs)
    // Assert
    expect(result).toBeNaN()
})

it("should yield a correct sum if an array of numeric string value provided", () => {
    // Arrange
    const numbers = ['1', '2', '3', '4']
    const expectedResult = numbers.reduce((acc, cru) => +acc + +cru, 0)

    // Act
    const result = add(numbers)

    // Assert
    expect(result).toBe(expectedResult)

})
```
