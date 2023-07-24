
// for detecting clicks on buttons
for(var i=0 ; i<7 ; i++)
{   
    document.querySelectorAll(".drum")[i].addEventListener("click" , function()
    {
        var key = this.innerHTML ;
        handleClick(key);
        buttonAnimation(key);
    });
    
} 

// for detecting key presses on the keyboard
document.addEventListener("keydown", function(e){
    var pressedkey = e.key
    handleClick(pressedkey);
    buttonAnimation(pressedkey);
})

//for running the function which plays sounds 
function handleClick(key) {
   
   switch(key)
   {
    case "w": 
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a": 
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s": 
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d": 
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j": 
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "k": 
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "l": 
    var snarer = new Audio("sounds/snare.mp3");
    snarer.play();
    break;

    default: 
    break;
   }
}

function buttonAnimation(character){

    document.querySelector("." + character).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + character).classList.remove("pressed");
    }, 100)
} 


