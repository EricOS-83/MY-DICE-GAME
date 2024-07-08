var randomNumber1 = Math.ceil(Math.random()*6);

var imageNumber1 = "dice" + randomNumber1 +".png";

var diceImage1 = "./images/"+ imageNumber1;

var randomNumber2 = Math.ceil(Math.random()*6);

var imageNumber2 = "dice" + randomNumber2 +".png";

var diceImage2 = "./images/"+ imageNumber2;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",diceImage1);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",diceImage2);


    if (randomNumber1 > randomNumber2){
        document.querySelector("h3").innerHTML = "Player1 wins";
    }

    else if(randomNumber1 < randomNumber2){
        document.querySelector("h3").innerHTML = "Player2 wins";    
    }

    else if(randomNumber1 == randomNumber2){
        document.querySelector("h3").innerHTML = "Draw - Please try again";
    }


