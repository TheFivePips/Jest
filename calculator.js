
const calculator = {

    add(num1, num2){
        let result
        inputValid(num1, num2) ? result = num1 + num2 : result = "Inputs must be numbers"
        return result
    },
    subtract(num1, num2){
        let result
        inputValid(num1, num2) ? result = num1 - num2 : result = "Inputs must be numbers"
        return result

    },
    multiply(num1, num2){
        // to the nearest hundreths
        if(inputValid(num1, num2)){
            return Math.round(100*(num1 *num2))/100;
        }
        else return "Inputs must be numbers"
        
    },
    divide(num1, num2){
        // to the nearest hundreths

        if(inputValid(num1, num2)){
            return Math.round(100*(num1/num2))/100;
        }
        else return "Inputs must be numbers"
    }

}

function inputValid(num1, num2){
    if(typeof(num1) !== "number" || typeof(num2) !== "number"){
        return false
    }
    return true
}

export default calculator

