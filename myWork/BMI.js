//สร้าง function BMI โดยรับค่า pounds , inches
function findBMI(pounds,inches) {
    kg = pounds*(0.453592); //kg คือตัวแปรที่รับค่า pound มาแปลงเป็นเป็น Kilogram
    m  = inches*(0.0254); // m คือ ตัวแปรที่รับค่า inches มาแปลงเป็น meter 
    bmi = kg/m^2;  // bmi คือ ตัวแปรที่หาค่า BMI 

    return `kg : ${kg} , m : ${m} , bmi : ${bmi}`;  //return ค่าต่างๆเก็บไว้ นิพจน์ (${ value }) 
}

console.log(`BMI : ${findBMI(36.5,39)}`) // log ข้อมูลในหน้านั้นออกมาดูว่าทำงานได้ผลลัพท์อย่างไร ตาม function


// function BMI(pound,inch){
//     let Kilogram ;
//     let meter ;
//     let BMI ;
//     const convertPoundtoKg = 0.453592 ;
//     const convertInchtoM = 0.0254 ;

//     Kilogram = pound * convertPoundtoKg;
//     meter = inch * convertPoundtoM;
//     BMI = Kilogram / (meter*meter);
// } return BMI

// console.log

// `BMI : ${BMI} Kg : ${Kilogram} M : ${meter}`;

//     console.log(`BMI : ${BMI(36.5,39)} Kilogram : ${Kilogram} Meter : ${meter}`);
// console.log(`BMI : ${BMI(42,51)} Kilogram : ${Kilogram} Meter : ${meter}`);
// console.log(`BMI : ${BMI(50,60)} Kilogram : ${Kilogram} Meter : ${meter}`);
