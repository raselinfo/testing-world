# testing-js

## Test Runner

As the name suggests, Test Runner is a tool that is used to run or execute tests and export results. It is a library that selects the source code directory and picks the test files to run them for verifying bugs and errors

- Runs your tests (i.e.,)
- Automatically detects testing code
- Displays results
- e.g Jest, Karma

## Assertion Library

Assertion libraries are tools to verify that things are correct. This makes it a lot easier to test your code, so you don't have to do thousands of if statements.

- Used to define expected outcomes
- Checks whether expectations are met
- Supports all kinds of expectations and modes (sync/ async)
- e.g., Jest,Chai

## Vitest

```js
yarn add -D vitest

// package.json
"scripts": {
    "test": "vitest --globals"
  },
```
