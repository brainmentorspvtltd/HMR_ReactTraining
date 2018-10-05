/*
1. Get the Data From ProductOperations By Calling 
fillProducts it give Array of Products

Loop the Products and print on Screen
*/
var products = productOperations.fillProducts();  // run on head tag
window.addEventListener("load",showProducts);
function showProducts(){

    for(let product of products){
        var currentDiv = createDiv(product);
        document.querySelector("#products").appendChild(currentDiv);
    }
}

function createDiv(product){
    var div = document.createElement("div");
    var img= document.createElement("img");
    img.src=product.photo;
    div.appendChild(img);
    var pName =document.createElement("p");
    pName.innerText = product.name;
    div.appendChild(pName);
    var price  = document.createElement("p");
    price.innerText = product.price;
    div.appendChild(price);
    return div;
    
}


