const { error } = require("node:console")

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function divide(a,b){
    if (b===0){
        throw new Error('divide by 0 is no allowed')
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    divide
}