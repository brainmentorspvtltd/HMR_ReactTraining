class Product{
    
    constructor(id, name, price, photo, desc){
        this.id = id;
        this.name = name;
        this.price = price;
        if(id>2){
            this.photo = "https://rukminim1.flixcart.com/image/312/312/jmp79u80/mobile/g/x/r/nokia-5-1-plus-ta-1102-ds-original-imaf9jzhhmfm78d9.jpeg?q=70";
        }
        else{
            this.photo="https://rukminim1.flixcart.com/image/312/312/jdhp47k0/mobile/e/h/e/redmi-note-5-pro-na-original-imaf2ashnnbxxks5.jpeg?q=70";
        }
        //this.photo = photo;
        this.desc = desc;

    }
}

