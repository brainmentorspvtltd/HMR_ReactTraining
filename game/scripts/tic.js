window.addEventListener("load",bindEvents);
var isXorZero = false;
function showTic(){
    // this - Current Calling Button Reference
    console.log("Show Tic Call");
    if(this.innerText.trim().length==0){
    this.innerText =  isXorZero?"X":"0";
    isXorZero = !isXorZero;
    }
    //this.innerText = "Hello";
    //TODO  -->  <button>Hello</button>
}

function bindEvents(){
var buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click",showTic);
    //!button.showTic()
    
}
}
//bindEvents();