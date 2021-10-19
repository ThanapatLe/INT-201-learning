// let person = {} //let person object(); // let person = new object(); // implicit class
// console.log(typeof person);
// person.id = 123456789;
// person.name = 'somchai';
// person.age = 50;
// console.log(person);
// person.email = 'somchai@gmail.com';
// console.log(person);
// delete person.email;
// console.log(person);

// class Person{
//     constructor(id,name){
//         if(id.length != 13) this._id = 'unknown';
//         else this._id =id;
//         this._name = name;
//     }
//     //getter
//     get id(){
//         return this._id;
//     }

//     //setter
//     set id(id){
//         this._id = id ;//backing field
//     }

//     get name(){
//         return this._name;
//     }

//     set name(name){
//         this._name = name ;//backing field
//     }

//     // getPersonIdLength(){
//     //     return this._id.length;
//     // }
//     toString(){
//         return`person id: ${this._id}, person name = ${this._name}`;
//     }

// }

// let per1 = new Person('123456789','SomSri');
// console.log(per1.toString());
// let per2 = new Person('1234567890123', 'Somsak');

// console.log(per2.toString());

// class Person {
//   constructor(id, name) {
//     if (id.length != 13) this._id = "unknown";
//     else this._id = id;

//     this._name = name;
//   }

//   //getter

//   get id() {
//     return this._id;
//   }

//   //setter

//   set id(id) {
//     this._id = id; //backing field
//   }

//   // //method

//   toString() {
//     return `person id = ${this._id}, person name= ${this._name}`;
//   }
// }

// let per1 = new Person("1234567", "SomSri");

// console.log(per1.toString());

// let per2 = new Person("1234567891234", "Somsak");

// console.log(per2.toString());

//   per2.getFirstNameLetter = function () {

//     return this._name.charAt(0);

//   };

//   console.log(per2.getFirstNameLetter());

//   console.log(per1.getFirstNameLetter());

//per1.getFirstNameLetter is not a function

// Person.prototype.getFirstNameLetter = function () {

//   return this._name.charAt(0);

// };

// console.log(per2.getFirstNameLetter());

// console.log(per1.getFirstNameLetter());

// class Person {
//   constructor(id, name) {
//     if (id.length != 13) this._id = "unknown";
//     else this._id = id;

//     this._name = name;
//   }

//   //getter

//   get id() {
//     return this._id;
//   }

//   //setter

//   set id(id) {
//     this._id = id; //backing field
//   }

//   set name(name) {
//     console.log("you are in setter ");

//     this._name = name;
//   }

//   get name() {
//     console.log("you are in getter ");

//     return this._name;
//   }

//   // //method

//   toString() {
//     return `person id = ${this._id}, person name= ${this._name}`;
//   }
// }

// let per1 = new Person("1234567", "SomSri");

// per1.name = "Umaporn";

// console.log(per1.name);

//J
let player = (firstname, lastname) => {
  return (player = {
    firstname: firstname ? firstname : "unknown",

    lastname: lastname ? lastname : "unknown",

    name: () => {
      return `${firstname} ${lastname}`;
    },
  });
};

let p1 = player("a","b");
console.log(player.name());

//Pee
function player(firstName, lastName) {
  let fname;

  let lname;

  if (fname) {
    fname = firstName;
  } else {
    fname = "unknown";
  }

  if (lname) {
    lname = lastName;
  } else {
    lname = "unknown";
  }

  return `${fname} ${lname}`;
}

console.log(player());
