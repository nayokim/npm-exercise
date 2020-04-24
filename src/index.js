const $ = require('jquery');

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