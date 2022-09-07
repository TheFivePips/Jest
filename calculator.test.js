import calculator from "./calculator";

// add
test("are the inputs numbers", () => {
    expect(calculator.add('2', 3)).toBe("Inputs must be numbers")
})
test("does the add function work normally", () => {
    expect(calculator.add(2, 3)).toBe(5)
}) 
test("1.does add work with negative numbers", () => {
    expect(calculator.add(-2, 3)).toBe(1)
})
test("2.does add work with negative numbers", () => {
    expect(calculator.add(-2, -3)).toBe(-5)
})
test("1.does add work with decimals", () => {
    expect(calculator.add(2.1, 3.1)).toBe(5.2)
})
test("2.does add work with decimals", () => {
    expect(calculator.add(0.1, 0.1)).toBe(0.2)
})

// subtract
test("are the inputs numbers", () => {
    expect(calculator.subtract('2', 3)).toBe("Inputs must be numbers")
})
test("does the subtract function work normally", () => {
    expect(calculator.subtract(2, 3)).toBe(-1)
}) 
test("1.does subtract work with negative numbers", () => {
    expect(calculator.subtract(-2, 3)).toBe(-5)
})
test("2.does subtract work with negative numbers", () => {
    expect(calculator.subtract(-2, -3)).toBe(1)
})
test("1.does subtract work with decimals", () => {
    expect(calculator.subtract(2.1, 3.2)).toBe(-1.1)
})
test("2.does subtract work with decimals", () => {
    expect(calculator.subtract(0.1, 0.1)).toBe(0)
})

// multiply
test("are the inputs numbers", () => {
    expect(calculator.multiply('2', 3)).toBe("Inputs must be numbers")
})
test("does the multiply function work normally", () => {
    expect(calculator.multiply(2, 3)).toBe(6)
}) 
test("1.does multiply work with negative numbers", () => {
    expect(calculator.multiply(-2, 3)).toBe(-6)
})
test("2.does multiply work with negative numbers", () => {
    expect(calculator.multiply(-0.5, -0.2)).toBe(0.1)
})
test("1.does multiply work with decimals", () => {
    expect(calculator.multiply(2.1, 3.2)).toBe(6.72)
})
test("2.does multiply work with decimals", () => {
    expect(calculator.multiply(0.1, 0.1)).toBe(0.01)
})

// divide
test("are the inputs numbers", () => {
    expect(calculator.divide('2', 3)).toBe("Inputs must be numbers")
})
test("does the divide function work normally", () => {
    expect(calculator.divide(4, 2)).toBe(2)
}) 
test("1.does divide work with negative numbers", () => {
    expect(calculator.divide(-4, 2)).toBe(-2)
})
test("2.does divide work with negative numbers", () => {
    expect(calculator.divide(-0.5, -0.2)).toBe(2.5)
})
test("1.does divide work with decimals", () => {
    expect(calculator.divide(2.1, 3.2)).toBe(0.66)
})
test("2.does divide work with decimals", () => {
    expect(calculator.divide(0.1, 0.1)).toBe(1)
})