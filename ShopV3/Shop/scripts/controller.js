/*
1. Get the Data From ProductOperations By Calling 
fillProducts it give Array of Products

Loop the Products and print on Screen
*/
var products = productOperations.fillProducts();  // run on head tag
window.addEventListener("load",init);

function init(){
    bindEvents();
    showProducts();
}
var isSort = false;
function doSort(){
products = productOperations.sort(isSort);
isSort = !isSort;
showProducts();
}

function bindEvents(){
    document.querySelector("#searchbt").addEventListener("click",doSearch);
    document.querySelector("#sort").addEventListener("click",doSort);
    document.querySelector("#searchnamebt").addEventListener("click", doSearchByName);
}
function doSearchByName(){
    var name = document.querySelector("#searchnametxt").value;
    var subArray = productOperations.searchByName(name);
    showProducts(subArray);
}

function doSearch(){
    var price = document.querySelector("#searchtxt").value;
    var subArray = productOperations.search(price);
    showProducts(subArray);
}

function showProducts(subArray){
    document.querySelector("#products").innerHTML = "";
    if(subArray){
        for(let product of subArray){
            var currentDiv = createDiv(product);
            document.querySelector("#products").appendChild(currentDiv);
        } 
    }
    else{
    for(let product of products){
        var currentDiv = createDiv(product);
        document.querySelector("#products").appendChild(currentDiv);
    }
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


