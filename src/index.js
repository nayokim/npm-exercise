const $ = require('jquery');

//connect the keys files into this JS file
const keys = require("./keys");
console.log(keys);

console.log('test');
console.log('hello');

const person = {
    firstname: 'nayoung',
};

const {firstname} = person;

const sayHello = (person) =>(`hello ${person.firstname}. `);
console.log(sayHello(person));
sayHello(person);

$(document).ready(() =>{
    $('body').html(sayHello(person));

});