const obj1 = {a:1}
const obj2 = {a:1}
const obj3 = obj1

console.log(obj1 === obj3)

const client1 = {tcp:true}
const client2 = {tcp:true}


const listOfClients = [client1, client2]

client1 === listOfClients[0]