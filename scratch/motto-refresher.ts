const quokka = {
    isAwesome: true
}

console.log(quokka)

var obj1 = {a: 123, b: '321'}
var obj2 = {a: 124, b: '421'}

obj1, obj2


class Person 
{
    id: number;
    name: string;
    age: number;
}

var people: Person [] =[
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

      //Motto Refresher...

      function ShoppingList() {
          this.groceries = [];
      }

      ShoppingList.prototype.addItem = function (item) {
          this.groceries = this.groceries.concat([item]); //preferred immutable way of adding an item to the property array
      }

      ShoppingList.prototype.removeItem = function(item) {
        this.groceries = this.groceries.filter(function (grocery) {
            return item !== grocery; //preferred immutable way of removing an item from the property array
        })
      }

      var myList = new ShoppingList();

      myList.addItem('Banana');
      console.log(myList.groceries);
      myList.removeItem('Banana');
      console.log(myList.groceries);