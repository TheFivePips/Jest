import reverseString from "./reverseString"

test("is it a string", () => {
    expect(reverseString(123)).toBe("Input must be a string")
}) 
test("will it reverse a single lowercase string", () => {
    expect(reverseString("string")).toBe("gnirts")
})
test("will it reverse a single Uppercase string", () => {
    expect(reverseString("String")).toBe("gnirtS")
})
test("will it reverse non-alphabetic characters", () => {
    expect(reverseString("12345")).toBe("54321")
})
test("does it work with multiple words", () => {
    expect(reverseString("hello there")).toBe("ereht olleh")
})