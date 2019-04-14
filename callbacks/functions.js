function birinci(callback){
    console.log("a");
    callback(ucuncu);
}

function ikinci(callback){
    console.log("b");
    callback();
}
function ucuncu(){
    console.log("c");
}

birinci(ikinci);