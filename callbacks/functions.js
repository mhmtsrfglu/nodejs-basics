function func1(callback){
    console.log("a");
    callback(func3);
}

function func2(callback){
    console.log("b");
    callback();
}
function func3(){
    console.log("c");
}

birinci(func2);