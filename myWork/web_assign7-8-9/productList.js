import { products } from "./product.js";
import { AddToCart, cart } from "./add.js";  
import { CookieUtil } from "./cookie.js";
import { changeStatus } from "./theme.js";

// let str = ""
export let inBody = document.querySelector("body");
inBody.setAttribute("style","background-color: steelblue");

//navbar
export let navbar1 = document.createElement("nav");
navbar1.setAttribute("id","navtop");
navbar1.setAttribute("class","navbar navbar-scroll navbar-expand-lg navbar-light bg-light");

//div of nav to control div in 
let divInDiv1 = document.createElement("div");
divInDiv1.setAttribute("class","container-fluid");

//div1 in navbar
let divInNav1 = document.createElement("div");
divInNav1.setAttribute("class","d-flex");

//all of component in div1 {
let picInNav1 = document.createElement("img");
picInNav1.setAttribute("class","me-4");
picInNav1.setAttribute("id","search-icon");
picInNav1.setAttribute("src","search.png");
picInNav1.setAttribute("height","40px");

let formInNav1 = document.createElement("form");
formInNav1.setAttribute("id","form-search");
formInNav1.setAttribute("class","d-none");

let inputInNav1 = document.createElement("input");
inputInNav1.setAttribute("id","text-search");
inputInNav1.setAttribute("class","form-control");
inputInNav1.setAttribute("type","search");  
inputInNav1.setAttribute("placeholder","Search");

let butInNav1 = document.createElement("a");
butInNav1.setAttribute("id","search-btn");
butInNav1.setAttribute("class","btn btn-info me-4")
butInNav1.setAttribute("type","submit");
butInNav1.innerHTML = "Search";

export let themeBut = document.createElement("button")
themeBut.innerHTML = "DARK";
themeBut.setAttribute("class","btn btn-dark me-4");
themeBut.setAttribute("id","check");
themeBut.addEventListener("click",() => {
    changeStatus();
})

//}

//div2 in navbar
let divInNav2 = document.createElement("div");
divInNav2.setAttribute("class","d-flex");

//all of component in div2 {

   let removeBut = document.createElement("button")
  removeBut.setAttribute("class","btn btn-danger me-4")
  removeBut.setAttribute("id","remove")
  removeBut.innerHTML = `CLEAR <br> CART `;
  removeBut.addEventListener("click",() => {
    CookieUtil.deleteAllCookies();
    // CookieUtil.unset(a);
    window.location.reload();
  })

let picInNav2 = document.createElement("img");
picInNav2.setAttribute("class","me-4");
picInNav2.setAttribute("id","cart-icon");
picInNav2.setAttribute("src","shopping-cart.png");
picInNav2.setAttribute("height","40px");

let qtyInNav = document.createElement("p");  //สร้าง tag ชื่อ p ในตัวแปร qtyInNav
qtyInNav.setAttribute("class","d-flex me-2");
qtyInNav.innerHTML = `Your Cart : ${CookieUtil.get("total") ||0} `;
// qtyInNav.innerHTML = `Your Cart : ${cart.total} `;

// body{navbar1{divOut}}
inBody.appendChild(navbar1);
// navbar1{divInDiv1}
navbar1.appendChild(divInDiv1);

// divInDiv1{divInNav1{picInNav1,formInNav1,themeBut}}
divInDiv1.appendChild(divInNav1);
divInNav1.appendChild(picInNav1);
divInNav1.appendChild(formInNav1);
divInNav1.appendChild(themeBut);

//formInNav1{inputInNav1,butInNav1}
formInNav1.appendChild(inputInNav1);
formInNav1.appendChild(butInNav1);

// divInDiv1{divInNav1{},divInNav2{removeBut,picInNav2,qtyInNav}}
divInDiv1.appendChild(divInNav2);
divInNav2.appendChild(removeBut);
divInNav2.appendChild(picInNav2);
divInNav2.appendChild(qtyInNav);


export let divOut = document.createElement("div");
divOut.setAttribute("id","product");


function render(product){
  divOut.innerHTML = " ";
  let divInOut = document.createElement("div");
  divInOut.setAttribute("class","row");
  divInOut.setAttribute("id","rowOfCard");

for(let prod of product) {

  let divColIn = document.createElement("div");
  divColIn.setAttribute("class","col col-xxl-4");
  
  let divIn = document.createElement("div");
  divIn.setAttribute("id","allCard");
  divIn.setAttribute("class","card");
  divIn.setAttribute("style",
  "width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; ");
  let picInCard = document.createElement("img");
  picInCard.setAttribute("src",prod.img); 

  picInCard.setAttribute("class","card-img-top");
  
  let divInCard = document.createElement("div");
  divInCard.setAttribute("id","indexOfCard");
  divInCard.setAttribute("class","card-body");
  divInCard.setAttribute("style","text-align: center;");

  let pe = document.createElement("p");
  pe.setAttribute("id","dataOfProduct");

  const pId = `ID: ${prod.productId} <br>`;
  const pName = `Name: ${prod.productName} <br>`;
  const pDesc = `Description: ${prod.productDesc} <br>`;
  const pPrice = `Price: ${prod.productPrice} <br>`;
  const pStock = `Stock: ${prod.stock}`;

  pe.innerHTML = `${pId} ${pName} ${pDesc} ${pPrice} ${pStock}`;

  let butCard = document.createElement("button");
    butCard.setAttribute("id", prod.productId);
    butCard.setAttribute("class", "btn btn-primary");
    butCard.innerHTML = "Add to Cart";

    let checkNumOfClicked = 0
    butCard.addEventListener("click", () => {
      checkNumOfClicked += 1
      console.log(checkNumOfClicked)
      if (checkNumOfClicked > prod.stock) {
        alert(`product : ${prod.productName} out of stock`);
        checkNumOfClicked -= 1
        console.log(checkNumOfClicked)
      } else {
        alert(`add product : ${prod.productName}, ID : ${butCard.id} to cart`);
        AddToCart(prod);
        qtyInNav.innerHTML = `Your Cart : ${CookieUtil.get("total")}`;
        // qtyInNav.innerHTML = `Your Cart : ${cart.total}`;
        
      };
    });
   
    divInCard.appendChild(pe);
    divInCard.appendChild(butCard);

  divIn.appendChild(picInCard);
  divIn.appendChild(divInCard);
  divColIn.appendChild(divIn);
  divInOut.appendChild(divColIn);
  divOut.appendChild(divInOut)
  inBody.appendChild(divOut);
}
}



render(products); //function render ที่รับ parameter เป็น products

export { render}; //export render เพื่อออกมาใช้ใน file อื่นได้
