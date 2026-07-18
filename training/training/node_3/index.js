const path = require('path')

console.log('directory name:', path.dirname(__filename))

console.log('file name:', path.basename(__filename))

console.log('file extension: ',path.extname(__filename))

const joinPath = path.join('/user','documents','node',
    'projects')
console.log('join path :',joinPath)

