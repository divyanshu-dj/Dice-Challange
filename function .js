let imgArr = ["images/dice1.png" , "images/dice2.png" ,"images/dice3.png" ,"images/dice4.png" ,"images/dice5.png" ,"images/dice6.png"];


let index = Math.floor(Math.random() * 6);
document.querySelector(".img1").src = imgArr[index];

let i = Math.floor(Math.random() * 6);
document.querySelector(".img2").src = imgArr[i];

if(index>i){
    document.querySelector("h1").innerHTML = "Player 1 Won";
}
else if(i>index){
    document.querySelector("h1").innerHTML = "Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}


