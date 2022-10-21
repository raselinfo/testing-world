import { it, expect, describe } from "vitest"
import { transformToNumber } from "./numbers"

describe("transformToNumber()", () => {

    it("should be transform string number to typeof number", () => {
        // Arrange
        const input = "1"
        const expectedResult = 'number'
        // Act
        const result = transformToNumber(input)
        // Assert
        expect(result).toBe(1).toBeTypeOf(expectedResult)
    })

    it("should yield NaN if not provide any value", () => {
        let input;
        const result = transformToNumber(input)
        expect(result).toBeNaN()
    })
})