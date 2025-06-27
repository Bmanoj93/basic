document.title="Dom in javascript";
document.getElementById("header").innerHTML="Hello world";
document.getElementById("header").style.color="black";
document.getElementById("para").style.color="white";
document.getElementById("para").style.fontSize="60px";
document.getElementsByClassName("h")[0].style.color="blue";
document.body.style.backgroundColor = "yellow";
document.body.style.backgroundImage="url('idol.jpg')";

document.body.style.backgroundPosition="top right";
document.body.style.backgroundRepeat="no-repeat";
let manoj=document.getElementsByClassName("ds");
manoj[0].style.color="red";
manoj[1].style.color="blue";
manoj[2].style.color="green";
document.querySelector("bot").style.color="pink";
document.querySelector("bot").style.fontSize="10px";
let bot2=document.querySelectorAll("bot")
bot2[0].style.color="red";
function change()
{
    if(document.body.style.backgroundColor=="yellow"){
    document.body.style.backgroundColor="black";
    alert("background  color will change to black")
    }
    else{
        document.body.style.backgroundColor="yellow"
     
    }
        
}
function Change()
{
    document.getElementById("text").innerHTML="Barcelona Fc"
}










