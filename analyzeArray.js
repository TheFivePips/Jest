// takes an array of numbers and returns an object with the following properties: average, min, max, and length.

export default function analyzeArray(arr){
    if(!Array.isArray(arr)) return "Input must be an array, and the array items must be numbers"
    // if every item in the array is NOT a number return error message
    if(!arr.every((item) => typeof(item) === "number")){
        return "Array items must be numbers"
    }
    else{
        const average = arr.reduce((a,b) => a+b,0)/arr.length
        const min = Math.min(...arr)
        const max = Math.max(...arr)
        const length = arr.length
        
        const result = {
            average : Number(`${average}`),
            min : Number(`${min}`),
            max : Number(`${max}`),
            length : Number(`${length}`)
    
        }
        return result
    }
   
}