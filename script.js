var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber1 + ".png";
var randomImageSrc="images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSrc);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber2 + ".png";
var randomImageSrc="images/" + randomDiceImage;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSrc);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player1 you won..";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Player2 you won..";
}else {
    document.querySelector("h1").innerHTML= "draw..";
}