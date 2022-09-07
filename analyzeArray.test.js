import analyzeArray from "./analyzeArray";

test("1.is the input valid", () => {
    expect(analyzeArray(1,2,3,4,5)).toBe("Input must be an array, and the array items must be numbers")
})
test("2.is the input valid", () => {
    expect(analyzeArray(1,2,3,4,'5')).toBe("Input must be an array, and the array items must be numbers")
})
test("3.is the input valid", () => {
    expect(analyzeArray('1,2,3,4,5')).toBe("Input must be an array, and the array items must be numbers")
})
test("4.is the input valid", () => {
    expect(analyzeArray([1,2,3,4,'5'])).toBe("Array items must be numbers")
})



test("output must be an object", () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
      });
})
test("output must be the same regardless of position in array", () => {
    expect(analyzeArray([5,4,3,2,1])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
      });
})
