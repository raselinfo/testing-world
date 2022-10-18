import { it, expect } from "vitest";
import { add } from "./math";

it('should summarize all number values in an array', () => {
    const result = add([1, 2, 3, 4])
    expect(result).toBe(10)
    expect(add()).toBeTypeOf('string')
})
