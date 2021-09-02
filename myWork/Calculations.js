// const Bank1 = new Object(500);
// const Bank2 = new Object(100);
// const Bank3 = new Object(50);
// const Bank4 = new Object(20);
// const Bank5 = new Object(10);
// const Bank6 = new Object(5);
// const Bank7 = new Object(2);
// const Bank8 = new Object(1);

// const bankName = [Bank1, Bank2, Bank3, Bank4, Bank5, Bank6, Bank7, Bank8];
// const numOfBank = {Bank1s : 0, Bank2s : 0, Bank3s : 0, Bank4 : 0, Bank5 : 0, Bank6 : 0, Bank7 : 0, Bank8 : 0};

function calculation(priceOfProduct,priceFromCustomer){
    
    let bank ={
        priceOfBank : [500,100,50,20,10,5,2,1],
        numOfBank : [0,0,0,0,0,0,0,0]
    };

    let change = priceFromCustomer - priceOfProduct;
        while(change > 0){
            for(let i = 0 ; i < bank.priceOfBank.length ; i++ ){
            if(change >= bank.priceOfBank[i]){
                let num = Math.floor(change/bank.priceOfBank[i]);
                change -= num*bank.priceOfBank[i];
                //bank.bank500(numOfBank)
                bank.numOfBank[i] = num;

            }
        }
        return bank;
    }
}

console.log(calculation(500,1500));
console.log(calculation(2000,4873));
console.log(calculation(50,100));
