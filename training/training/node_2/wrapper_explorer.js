console.log('node module wrapper  demo')

console.log('filename in wrapper explorer',__filename)
console.log('driname in wrapper explorer',__dirname)

module.exports.greet = function(name){
    console.log(`hello ${name}`)
}