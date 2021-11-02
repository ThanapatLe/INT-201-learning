import { products } from "./product.js";

// let str = ""
const Pro = document.querySelector("#product");
for (let prod of products) {
  //   str = JSON.stringify(products[prod]);
  
  let pic = document.createElement("img");
  pic.setAttribute("src",prod.img); 
//   pic.setAttribute("max-width","300px")
  pic.setAttribute("class","card-img-top")
  
  let dic = document.createElement("div");
  let pe = document.createElement("p");
  dic.setAttribute("class","card");
//   dic.setAttribute("style","width : 350px ");
//   dic.setAttribute("style","margin : 10px");
  pe.innerHTML = `ID: ${prod.productId} <br>
  Name: ${prod.productName} <br>
  Description: ${prod.productDesc} <br>
  Price: ${prod.productPrice} <br>
  Stock: ${prod.stock}`;
  
  dic.appendChild(pe);  
  dic.insertBefore(pic,pe);
  Pro.appendChild(dic);
}

