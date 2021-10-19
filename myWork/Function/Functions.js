function outer(name) {
    //higher order function
    let family = [];
    family.unshift(name);
    const greeting = "Welcome everyone in family";

    function inner(newMember) {
      console.log(greeting);
      family.unshift(newMember);
      return family;
    }
    return inner; //return inner function
  }

  const myInner = outer("Umaporn");
  console.log(outer("Boss")("Bosszaza"));
  console.log(outer()());
  console.log(myInner("John"));
  console.log(myInner("SuSan"));

// function Mom(name) {
//   let family = ["Boss"];
//   family.unshift(name);
//   console.log(family);
// function child(name = "Boss007x") {
//     return console.log(family); 
//   }
// //   return console.log(family);
//   return child();
// }
// console.log(Mom("Bosszaza"));

