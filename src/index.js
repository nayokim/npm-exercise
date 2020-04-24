
//brings a npm library
const $ = require('jquery');

//connect the keys local file into this js file
const keys = require("./keys");
console.log(keys);

//connect the math.js file with this js file
import math from './math';




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
    console.log('math', math.add(5,8));
    console.log('math.divide', math.divide(50,10));
});