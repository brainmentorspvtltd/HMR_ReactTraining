
/*var obj = {id:1001,add:function(){

},sub(){  // sub:function()

}}*/

var productOperations = {
    products:[],
    fillProducts(){  // fillProducts:function(){}
    for(let i = 1; i<=5; i++){
        var product = new Product(i,"Apple"+i,100*i,"","IPhone");
        this.products.push(product);
    }
    }
}