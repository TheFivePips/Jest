import ceasarCipher from "./ceasarCipher";

test("1.are inputs valid", () => {
    expect(ceasarCipher(123, 1)).toBe("Input must be a string")
}) 
test("2.are inputs valid", () => {
    expect(ceasarCipher("hi", "1")).toBe("Offset must be a number")
}) 
test("is the offset less than 26", () => {
    expect(ceasarCipher("hi", 27)).toBe("Offset must be less than 26")
})
test("is it working as expected", () => {
    expect(ceasarCipher("hi", 1)).toBe('ij')
}) 
test("1.is it working as expected with the offset", () => {
    expect(ceasarCipher("hi", 2)).toBe('jk')
}) 
test("2.is it working as expected with the offset wrap", () => {
    expect(ceasarCipher("hi", 25)).toBe('gh')
}) 
test("does it work regarless of case", () => {
    expect(ceasarCipher("HI", 1)).toBe("ij")
})
test("does it ignore punctuation", () => {
    expect(ceasarCipher("hi!?,:.", 1)).toBe("ij")
})