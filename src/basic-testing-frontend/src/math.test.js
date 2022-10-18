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
