function zodiac(year){
    switch(year % 12){
        case(0): return 'monkey';
        case(1): return 'rooter';
        case(2): return 'dog';
        case(3): return 'pig';
        case(4): return 'rat';
        case(5): return 'ox';
        case(6): return 'tiger';
        case(7): return 'rabbit';
        case(8): return 'dragon';
        case(9): return 'snake';
        case(10): return 'horses';
        case(11): return 'sheep';
    }
    
}

console.log(`zodiac : ${zodiac(2201)}`);

// function zodiac(year) {

//     let zodiac = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horses','sheep']

//     let date = new Date;

//     year = date.getFullYear() < year?year - 543:year;

//     return zodiac[year%12];

// }

// console.log(zodiac(2001));

// console.log(zodiac(2544));