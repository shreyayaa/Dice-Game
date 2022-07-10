
//for dice 1
var randomNumber1 = (Math.floor(Math.random() * 6)) +1 ;   //Create a random number between 1-6
var randomImage = "dice" + randomNumber1 + ".jpg";         //Select image form dice1.png - dice6.png
var randomImageSource = "images/" + randomImage;          //Select image images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//for dice 2
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".jpg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "  🎉 Player 1 WINS";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 WINS  🎉";
}
else{
    document.querySelector("h1").innerHTML = "It's a tie 💥💥";
}



