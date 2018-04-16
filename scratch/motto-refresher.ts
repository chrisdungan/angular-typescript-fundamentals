//Just some quokka basics...
const quokka = {
    isAwesome: true
}

console.log(quokka)

var obj1 = { a: 123, b: '321' }
var obj2 = { a: 124, b: '421' }

obj1, obj2

//More quokka basics....
class Person {
    id: number;
    name: string;
    age: number;
}

var people: Person[] = [
    { 'id': 1, 'name': 'Todd Motto', age: 25 },
    { 'id': 2, 'name': 'Chris Dungan', age: 58 },
    { 'id': 3, 'name': 'Jonathan Chaiken', age: 39 },
    { 'id': 4, 'name': 'Raf Wlaz', age: 48 },
    { 'id': 5, 'name': 'Jason Camp', age: 45 },
    { 'id': 6, 'name': 'Jared Tait', age: 42 }
];

var report = (id, name) => `id: ${id} name: ${name}`;

var result = people.filter(person => {
    return (person.age > 25)
}).map(person => {
    return report(person.id, person.name);
});

console.log(result);


/***************************************************************/
/*Motto Refresher starts here, with an example using Javascript*/

//Javascript immutable array property
function ShoppingList() {
    this.groceries = []; //and inside the constructor we add properties
                         //and we have an array of groceries as a propery...
}

//To add a public method to this ShoppingList object, use a proptotype, as follows
ShoppingList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat([item]); //preferred immutable way of adding an item to the property array
}

ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter(function (grocery) {
        return item !== grocery; //preferred immutable way of removing an item from the property array
    })
}

var myList = new ShoppingList(); //Treats the function ShoppingList as a constructor function...

myList.addItem('Banana');
myList.addItem('Apple');
console.log(myList.groceries);

myList.removeItem('Banana');
console.log(myList.groceries);


//Same example using Typescript

class ShoppingList2 
{
    groceries: string[];
    constructor() {
        this.groceries = [];
    }

    addItem(item) {
        this.groceries = [...this.groceries, item] //leverage the spread operator to achieve similar immutability...
    }

    removeItem(item) {
        this.groceries = this.groceries.filter(function (grocery) {
            return item !== grocery;
        });
    }

    removeItemAlt(item) {
        this.groceries = this.groceries.filter((grocery) => item !== grocery);
    }
}

const myNewList = new ShoppingList2();
myNewList.addItem('Pear');
myNewList.addItem('Pizza');
console.log(myNewList.groceries)

myNewList.removeItem('Pear');
console.log(myNewList.groceries)

//Typescript is a superset of ES2015 (ES6)
//An inport or export allows us to import "something" from another file.
//These "somethings" are called modules.

//A module can be a string, an object, an array, a decorator, 
//it could be absolutely anything that you want to export - So...

import { uppercase } from './formatter';

var myName: string = 'Chris';
//console.log(uppercase(myName))


