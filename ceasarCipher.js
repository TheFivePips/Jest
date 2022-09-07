// takes a string and returns it with each character “shifted”
export default function ceasarCipher(str, offset = 1) {
    if(typeof(str) !== "string") return "Input must be a string"
    if(typeof(offset) !== "number") return "Offset must be a number"
    if(offset > 26) return "Offset must be less than 26"
    // remove all punctuation and make it lowercase
    const arr = str.replace(/[^\w\s]/g, "").toLowerCase().split('')
    // convert each letter to a charcode and back
    let results = arr.map(letter => {
        let charCode = letter.charCodeAt()
        if(charCode + offset > 122){
            let diff = (charCode + offset) - 122
            charCode = 96 + diff
            return String.fromCharCode(charCode)
        }
        else {
            return String.fromCharCode(charCode + offset)
        }

    })
    return results.join('')
}

