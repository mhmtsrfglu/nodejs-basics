const user = { id: 10, name: 'mehmet' };
const friends = [ { id: 11, name: 'kenan' }, { id: 12, name: 'murat' } ];

const getUser = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(user);
        },500);
    })
}

const getFriends = (userid) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(friends);
        },1000);
    })
}

//callback hell
let userid;
getUser().then(function(user){
    userid = user.id;
    getFriends(userid).then(function (friends){
        console.log(user);
        console.log(friends);
    })
})

//promise chain 1
getUser().then(() => {
    return user.id;
}).then((userID) => {
    getFriends(userID).then((friends) => {
        console.log(friends);
    });

})

//promise chain 2
getUser().then(() => {
    return getFriends(user.id);
}).then((friends) => {
    console.log(friends);
})

//async-await
async function asyncFun(){
    try{
        const user = await getUser();
        const friends = await getFriends(user.id);
        console.log('datalar',{user,friends});
    }catch(error){
        console.log(error);
    }

}

asyncFun();