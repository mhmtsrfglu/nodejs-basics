const degerler = {
    deger1:'deger1',
    deger2:'deger2',
    deger3:{
        isim: 'mehmet'
    },
    deger4:{
        soyisim: 'serefolu'
    }
}

const {deger1,deger2,deger3:{isim},deger4:{isim:soyisim}} = degerler;

console.log(deger1,deger2,isim,soyisim);

const arrdegerler = [1,2,3];

const [a,b,c] = arrdegerler;

console.log(a,b,c);
