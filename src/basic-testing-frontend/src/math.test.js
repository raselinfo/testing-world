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

it("should yield 0 if an empty array provide", () => {
    const numbers = []
    const expectedResult = 0

    const result = add(numbers)

    expect(result).toBe(expectedResult)
})

it("should yield an error if no input provide", () => {
    const resultFn = () => {
        add()
    }

    expect(resultFn).toThrow()
})