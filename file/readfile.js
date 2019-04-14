const fs = require('fs');

fs.readFile('demo.txt',(error,data) => {
    if(error)
        console.log(error);
    
    console.log(data.toString());
})
//senkron olarak çalışır ve ilk olarak tetiklenir. Bu olay tetiklenmeden diğer olaylar tetiklenmez
const demo = fs.readFileSync('demo.txt');
console.log('sync : ',demo.toString());