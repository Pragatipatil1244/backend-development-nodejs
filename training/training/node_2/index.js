const first_module = require('./first_module')

console.log(first_module.add(10,20))

console.log(first_module.subtract(20,12))

console.log(first_module.divide(10,0))

try{
    console.log('trying to div by 0')
    let result = first_module.divide(10,10)
    console.log('result ',result)
}
catch(error){
    console.log('caught error'.error.message)
}