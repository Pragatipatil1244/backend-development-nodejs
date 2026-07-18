function dividefn(num1 , num2){
    return new Promise((resolve,reject)=>{
        if(num2 ==0){
            reject('can not perform division by 0')
        }
        else{
            resolve(num1/num2)
        }
    })
}
dividefn(10,0)
.then((result)=> console.log(result,"res"))
.catch((error)=> console.log((error,'err'))
)

