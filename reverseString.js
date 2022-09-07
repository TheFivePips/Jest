// takes a string and returns it reversed
export default function reverseString(str) {
    if(typeof(str) !== "string") {
        return "Input must be a string"
    }
    return str.split('').reverse().join('')
}