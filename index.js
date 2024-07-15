// create a function that changes the image n1.


function rollDice1(){
    
    var randomNumber1 = Math.ceil(Math.random()*6);

    
    var imageNumber1 = "dice" + randomNumber1 +".png";
    var diceImage1 = "./images/"+ imageNumber1;

    document.querySelectorAll("img")[0].setAttribute("src",diceImage1);
    return randomNumber1;
}

// create a function that changes the image n2.


function rollDice2(){
    
    var randomNumber2 = Math.ceil(Math.random()*6);


    var imageNumber2 = "dice" + randomNumber2 +".png";
    var diceImage2 = "./images/"+ imageNumber2;

    document.querySelectorAll("img")[1].setAttribute("src",diceImage2);
    return randomNumber2;
}

//create a function that checks if randomNumber1 is equal to randomNumber2 etc. and passes a string to the H3 element.  

function showH3(){

    var randomNumber1 = rollDice1();
    var randomNumber2 = rollDice2();

    if(randomNumber1 > randomNumber2){
        document.querySelector("h2").innerHTML = "Player 1 wins";
    }

    else if (randomNumber2 > randomNumber1){
        document.querySelector("h2").innerHTML = "Player 2 wins";
    }

    else{
        document.querySelector("h2").innerHTML = "Draw";
    }
}

//create an event Listener to catch the button click. When the button clicks then the tag H3 will be visible.

document.querySelector("button").addEventListener("click",showH3);