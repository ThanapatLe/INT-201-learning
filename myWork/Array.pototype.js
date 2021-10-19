// let primitive1 = 'ant' ;
// let primitive2 = 2 ;



// let array1 = [1,2,3,'cat'];

// let object1 = { name1:'tle' , name2:'noey' , name3:'boss'};

// let arrow1 = (num) => {
//   let num = [1,2,3];
//   return num[0];
// }


// let array2 = [ ant = (num) => {let num = [1,2,3];
//     return num[0];}];

    
// let arrayTest = [['Best','Ben','Boss'],{Name:'Jason',LastName:'Prime'},true,'Tle','Noey',123]; // array ที่สามารถเก็บค่าเป็น array ,object ,boolean ,Number ,String ,

// console.log(arrayTest);
// console.log(arrayTest[0].shift());//แสดงข้อมูลของ array ในตำแหน่งที่ 1 โดยแสดงค่าแรกของ array ในตำแหน่งที่ 1 ซึ่งค่าแรกของ array ช่องแรก คือ  Best โดยหลังจากที่แสดงค่าแล้ว จะทำการเอาข้อมูลนั้นออกจาก array 
// console.log(arrayTest);//Best ถูกดึงออกจาก array หลังแสดงค่าจาก shift()
// console.log(arrayTest.shift());//แสดงข้อมูลของ array ในตำแหน่งที่ 1  ซึ่งตำแหน่งแรกของ array คือ  [Ben,Boss] โดยหลังจากที่แสดงค่าแล้ว จะทำการเอาข้อมูลนั้นออกจาก array
// console.log(arrayTest);//arrayช่องแรกถูกลบออก , [Ben ,Boss] ถูกดึงออกหลังจากแสดงค่า shift()
// console.log(arrayTest.shift());//แสดงข้อมูลของ array ในตำแหน่งที่ 1  ซึ่งตำแหน่งแรกของ array คือ  object โดยหลังจากที่แสดงค่าแล้ว จะทำการเอาข้อมูลนั้นออกจาก array
// console.log(arrayTest);// true ถูกดึงออกจาก array หลังแสดงค่าจาก shift()

// let students = [
//     {id: 1,name: 'Ann'},
//     { id: 2, name: 'Peter' },
//     { id: 3, name: 'Mary' }
//   ];

// console.log(students);
// console.log(students.shift());

// let names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
// console.log(names.length);
// // for(i=names.length-1; i>=0;i--){
// //     console.log(names.shift());
// // }

// for(i=0; i<=names.length+2;i++){
//     console.log(names.shift());
// }

// let a = 'Noey';
// console.log(a.shift());//ไม่สามารถ shift ได้ เนื่องจาก variables เป็น primitive type จึงไม่สามารถ shift ได้

// ant = (names) => {
// for(i=0; i<=names.length;i++){
//     if(names[i].charAt(0) == 'A'){
//         console.log(names[i]);
//     }
//     return 0;
// }
// }
// console.log(ant(names));

// while( typeof (i = names.shift()) !== 'undefined' ) {
//     console.log(i);
// }


// console.log(arrayTest[0].unshift('Bank'));
// console.log(arrayTest.unshift('Pee','Jae'));
// console.log(arrayTest.unshift(1,2));


let Tester =  [['One','Two','Three'],{Name:'Jason',LastName:'Prime'},true,'Tle','Noey',123]


// console.log(Tester);
// console.log(Tester[0].shift());
// console.log(Tester);
// console.log(Tester.shift());
// console.log(Tester);
// console.log(Tester.shift());
// console.log(Tester);

// function CheckArray(a){
//     return a.shift();
// }

// console.log(CheckArray(Tester[0]));
// console.log(CheckArray(Tester));


function ShiftArray(arr){
for(i=arr.length-1; i>=0;i--){
    return arr.shift();
}
}

console.log(ShiftArray(Tester));
console.log(Tester);



// for(i=0; i<=Tester.length+4;i++){
//     console.log(Tester.shift());
// }



// function wLoopArray(arr){
// while(typeof (i = arr.shift()) !== 'undefined' ) {
//     console.log(i);
// }
// }

// wLoopArray(Tester);
// console.log(Tester);

// let a = 'Noey';
// console.log(a.shift());
// let b = 1;
// console.log(b.shift());









// for(let i in Tester){
//     console.log(Tester.shift(i));
// }
// for (let item of data) {
//     console.log(item);
//   }