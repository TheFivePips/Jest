// takes a string and returns it with the first character capitalized.
export default function capitalize(str) {
    if(typeof(str) !== "string"){
        return "Not a valid input"
    }
    const re = /[a-z]/i
    if(re.test(str.charAt(0)) === false){
        return "Not a valid input"
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

