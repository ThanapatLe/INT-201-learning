let student = {
    name : 'chayakorn' ,
    age : 112 ,
    gender : 'male' ,
    personality : 'so very smart mark mark~'  
};

console.log(student);

for (let property in student) {
    console.log(`key : ${property} , value : ${student[property]}`);
}
        