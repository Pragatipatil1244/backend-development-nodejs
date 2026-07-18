

console.log('node_1 file it is')

const arr = [1,2,3,4]

console.log(arr,'array')
setTimeout(()=>{
    console.log('this msg is delayed by 2 seconds')
},2000)

setTimeout(()=>{
    console.log('this msg is delayed by 0 seconds')
},0)

console.log('this is the last line ');
