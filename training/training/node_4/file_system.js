const fs = require('fs')
const path = require('path')

const dataFolder = path.join(__dirname,'data')

if(!fs.existsSync(dataFolder)){
fs.mkdirSync(dataFolder)
console.log('data folder created')
}
else{
    console.log('already file is there');
    
}

const filePath = path.join(dataFolder,'new_file.txt')

fs.writeFileSync(filePath,"hello from node js")
console.log('file created successfully')

const readContent = fs.readFileSync(filePath,'utf8')
console.log('file content',readContent)

fs.appendFileSync(filePath,'\n this is a new line added to that file')
console.log('new file content added')