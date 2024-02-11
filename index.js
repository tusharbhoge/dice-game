let randomNumber1= Math.floor(Math.random() *6 )+1;
let randomImg="dice"+randomNumber1+".png";
let randomImgScr="./images/"+randomImg;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgScr);

let randomNumber2= Math.floor(Math.random()*6)+1;
let randomImgSrc2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="🚩Player 1 wins!!!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="Player 2 wins!!!🚩";
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Draw!";
}