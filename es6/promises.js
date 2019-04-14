//callback hell!
const asenkronFunc = function(sayi,callback){
    const sonuc = sayi+3;

    callback(sonuc);
}

asenkronFunc(5,function(sonuc){
    console.log(sonuc);
    asenkronFunc(6,function(sonuc){
        console.log(sonuc);
        asenkronFunc(9,function(sonuc){
            console.log(sonuc);
            asenkronFunc(10,function (sonuc) {
                console.log(sonuc);
            })
        })
    })
})

//promise
const asynFun = (sayi) => {
    return new Promise((resolve,reject) => {
        if(sayi === 4)
            resolve('ok');
        else
            reject('error');
    })
}
asynFun(4).then((data) => {
    console.log(data);
    return 10;
}).then((data) => {
    console.log(data);
}).catch((error) =>{
    console.log(error);
})