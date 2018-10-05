


const productOperations = {
    products:[],  // this will store the Product Objects
    fillProducts(){  // fillProducts:function(){}
    for(let i = 1; i<=5; i++){
        var product = new Product(i,"Apple"+i,100*i,"","IPhone");
        this.products.push(product);
    }
    return this.products;    
}
}