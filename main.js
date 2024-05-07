"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car1 = "dodge";
let car2 = "la ferrari";
let car3 = "lambo";
let carsName = ["dodge challenger", "hellcat", "la ferrari"];
//              0               ,  1       ,    2     index
console.log(carsName[0]);
carsName.push('Porsche 911');
console.log(carsName);
carsName.pop();
console.log(carsName);
let country = ['Pakistan', 'China', 'Japan', 'Egypet', 'Indonisea', 'Jamica', 'England', 'Africa'];
country.forEach((country => {
    console.log(country);
}));
//let myName =[];
//console.log(myName)
let friends = ['habiba', 'olivia', 'vina', 'hayat'];
friends.unshift('natalia', 'calista');
//use for add
console.log(friends);
friends.shift();
//use for remove
console.log(friends);
