let P = new Promise((resolve, reject) => {
    let a = 2 + 2
    if(a == 4){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

P.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
})