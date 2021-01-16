function getRandom(){
    return Math.floor(Math.random()*6) + 1;
}
var rnd1 = getRandom();
var rnd2 = getRandom();
document.querySelector(".img1").setAttribute("src",`images/dice${rnd1}.png`)
document.querySelector(".img2").setAttribute("src",`images/dice${rnd2}.png`)

if(rnd1 > rnd2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
}
else if(rnd1 < rnd2){
    document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}