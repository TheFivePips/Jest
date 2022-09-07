
import capitalize from "./capitalize"
let hello = "hello"

test('lowercase alphabet leter to upercase alphabet letter', () => {
    expect(capitalize('string')).toBe('String')
});

test('upper case alphabet letter to remain the same', () => {
    expect(capitalize("String")).toBe('String')
})
test('1.works on more than one word', ()=> {
    expect(capitalize("strings are cool")).toBe("Strings are cool")
})
test('2.works on more than one word that is also capitalized', ()=> {
    expect(capitalize("Strings are cool")).toBe("Strings are cool")
})
test("1.is the first character something that can be capitalized", () => {
    expect(capitalize("123")).toBe("Not a valid input")
})
test("2.is the first character something that can be capitalized", () => {
    expect(capitalize("!@#$")).toBe("Not a valid input")
})
test("3.is the first character something that can be capitalized", () => {
    expect(capitalize("`hello`")).toBe("Not a valid input")
})
test("4.is the first character something that can be capitalized", () => {
    expect(capitalize(`${hello}`)).toBe("Hello")
})
test("1.is a string", () => {
    expect(capitalize(123)).toBe("Not a valid input")
})
test("2.is a string", () => {
    expect(capitalize(true)).toBe("Not a valid input")
})
test("3.is a string", () => {
    expect(capitalize(null)).toBe("Not a valid input")
})