
let ml=document.createElement("ul");
for(let i=1;i<=3;i++){
    let li= document.createElement("li");
    li.textContent="Item "+i;
    li.style.color="red";
    li.style.fontSize="18px";
    ml.appendChild(li);
    document.body.appendChild(ml);  
}
let aish=document.createElement("p");
aish.textContent="iam sana";
 aish.style.color="blue";
 aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
let mg=document.createElement("p");
mg.style.color="blue";
 mg.style.fontSize="20px";
 mg.textContent="bot anvesh"
 document.getElementById("vasi").appendChild(mg);

setTimeout(() => {
    let re =document.getElementsByClassName("list")[3];
    if (re)
        {
           re.remove() ;
        }
},2000 );


let newHeading=document.createElement("h2");
newHeading.innerHTML="Messi is Greatest of All Time";
newHeading.style.color="gold";
newHeading.style.fontSize="20px";
document.body.appendChild(newHeading);


setTimeout(()=>{
let newText=document.createElement("p");
newText.textContent="Neymar The Magician and Prince";
newText.style.color="green";
newText.style.fontSize="20px";
document.body.appendChild(newText); 
},2000);


let tagText=document.createElement("p");
tagText.textContent="Neymar The Magician and Prince";
tagText.style.color="green";
tagText.style.fontSize="20px";
document.getElementById("vasi").appendChild(newText);


/*let mylist=document.createElement("ul");
for(i=0;i<=3,i++){
   let listItems =document.createElement("li");
   listItems.textContent="Item"+i;
   listItems.style.color="orange";
   listItems.style.fontSize="20px";
   mylist.appendChild(li);
   document.body.appendChild(mylist);
}*/
//create list ,items, remove
