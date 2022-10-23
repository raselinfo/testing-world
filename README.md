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
import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
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
    "test": "vitest --run --reporter verbose",
    // "test:watch": "vitest --global",
    // "test:watch": "vitest",
  },
```

**Sample Test**

```js
import { it, expect, describe } from 'vitest';
import { add } from './math';

describe('add()', () => {
  it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3, 4];
    const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);
    // Act
    const result = add(numbers);
    // Assert
    expect(result).toBe(expectedResult);
  });

  it('should yield NaN if a least one invalid number is provide', () => {
    // Arrange
    const inputs = ['string', 5, true, undefined, null, NaN];
    // Act
    const result = add(inputs);
    // Assert
    expect(result).toBeNaN();
  });

  it('should yield a correct sum if an array of numeric string value provided', () => {
    // Arrange
    const numbers = ['1', '2', '3', '4'];
    const expectedResult = numbers.reduce((acc, cru) => +acc + +cru, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it('should yield 0 if an empty array provide', () => {
    const numbers = [];
    const expectedResult = 0;

    const result = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it('should yield an error if no input provide', () => {
    const resultFn = () => {
      add();
    };

    expect(resultFn).toThrow(/No input provided/);
  });

  it('should throw an error if provided multiple argument instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const result = () => {
      add(num1, num2);
    };

    expect(result).toThrow();
  });
});
```

**Error Check**

```js
it('should yield an error if no input provide', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it('should throw an error if provided multiple argument instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const result = () => {
    add(num1, num2);
  };

  expect(result).toThrow();
});
```

## Test Case

- toBeTypeOf
- toBe() // <exact equality> ✅ 1===1 (true) , {} === {} (false), [] === [] (false)
- toEqual() // <compare only the value> ✅ 1===1 (true) , {} === {} (true), [] === [] (true)
- toBeNaN
- toThrow
- toContain

## Good Test

1. Test only your code. Don't test third-party code.don't test native nodejs packages.
2. Make you code split (clean code)
3. Only test one thing
   1. One feature
   2. e.g, Validate input or transform if (not both)
4. Focus on the essence of a test when arranging
5. Follow AAA
6. keep your number of assertions (expects) low

## Integration Test

Integration testing is the phase in software testing in which individual software modules are combined and tested as a group. Integration testing is conducted to evaluate the compliance of a system or component with specified functional requirements. It occurs after unit testing and before system testing.

Integration testing -- also known as integration and testing (I&T) -- is a type of software testing in which the different units, modules or components of a software application are tested as a combined entity. However, these modules may be coded by different programmers.

This type of testing follows the natural control flow hierarchy, i.e., top to bottom. For example, you have a fitness app with four modules – A login page, a profile page, a workout page, and a payment page. The testing of the application will start from the crucial top-level module.

**What are the 4 types of integration testing?**
Types of Integration Testing
Big Bang Method. This method involves integrating all the modules and components and testing them at once as a single unit. ...
Bottom-Up Method.
Hybrid Testing Method.
Incremental Approach.
Stubs and Drivers.
Top-Down Approach.

**What is main purpose of integration testing?**
The purpose of integration testing is to expose faults in the interaction between integrated units. Once all the modules have been unit tested, integration testing is performed.

```js
// ✅ This is the function should test
export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}

// ✅ And this is the test code
describe('cleanNumbers()', () => {
  it('should return an array of number values if and array of number value provided', () => {
    const numberValues = ['1', '2', '3'];
    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];
    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
```
