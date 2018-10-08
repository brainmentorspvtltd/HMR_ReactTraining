


const productOperations = {
    products:[],  // this will store the Product Objects
    searchByName(name){
        return this.products.filter(productObject=>productObject.name.includes(name));
    },
    sort(isSort){
        return this.products.sort((first,second)=>{
            if(isSort){
                return second.price - first.price;
            }
            else{
                return first.price - second.price;
            }
        });
    },
    search(price){
       /* var subArray =  this.products.filter(productObject=>productObject.price>=price);
        return subArray;*/
        return this.products.filter(productObject=>productObject.price>=price)
    },
    fillProducts(){  // fillProducts:function(){}
    for(let i = 1; i<=5; i++){
        var product = new Product(i,"Apple"+i,100*i,"","IPhone");
        this.products.push(product);
    }
    return this.products;    
}
}