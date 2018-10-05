window.addEventListener("load",bindEvents);
var isXorZero = false;
var buttons ;
var gameEnd = false;
function showTic(){
    // this - Current Calling Button Reference
    console.log("Show Tic Call");
    if(!gameEnd){
    if(this.innerText.trim().length==0){
    this.innerText =  isXorZero?"X":"0";
   isGameOver();
    isXorZero = !isXorZero;
    }
}
    //this.innerText = "Hello";
    //TODO  -->  <button>Hello</button>
}

function bindEvents(){
 buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click",showTic);
    //!button.showTic()
    
}
}

function isNotBlank(button){
    return button.innerText.trim().length==0?false:true;
}

function isRowSame(first, second, third){
    if(isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third])){
   return buttons[first].innerText == buttons[second].innerText && buttons[first].innerText == buttons[third].innerText;  
    }
    return false;
}
function isGameOver(){
    var gameOver ="";

    if(isRowSame(0,1,2)){
        gameOver = "Game Over";
        gameEnd = true;
    }
    else
    if(isRowSame(3,4,5)){
        gameOver = "Game Over";
        gameEnd = true;
    }
    document.querySelector("#result").innerText = gameOver;
}

//bindEvents();