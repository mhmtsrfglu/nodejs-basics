const events = require('events');
const eventEmitter =  new events.EventEmitter();
//olay adı bitirinci parametre, ikinci parametre olay tetiklenince olacak olay
eventEmitter.on('hey',(obj) => {
    console.log(`Selam, isim: ${obj.name}, soyisim: ${obj.surname}`);
})
const isim = "Mehmet";
const obj = {name:'Mehmet',surname:'Şerefoğlu'};
eventEmitter.emit('hey',obj);

//eventi sadece bir kere tetikle
eventEmitter.once('oncehey',function(){
    console.log("selam");
})

eventEmitter.emit('oncehey');