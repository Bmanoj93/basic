let age=18;
if (age < 18)
{
    console.log("you are a minor")
}
else if(age>=18 && age<65)
{
     console.log("you are an adult")
}
else{
     console.log("you are a senior citizen")
}
 console.log("\n")

 //switch statement
 let day=3;
 switch(day) 
 {
    case 1:
         console.log("sunday");
         break;
    case 2:
         console.log("monday");
         break;
    case 3:
         console.log("tuesday");
         break;
    case 4:
         console.log("wednesday");
         break;
    case 5:
         console.log("thursday");
         break;
    case 6:
         console.log("friday");
         break;
    case 7:
         console.log("saturday");
         break;
    default:
         console.log("invalid day");
 }
 //example of while loop
 let j=0;
 while(j<5)
 {
     console.log("whileloop iterator:",j);
     j++;
       
 }
 console.log("\n");


 //example of do.while loop
 let k=0;
 do{
         console.log("do while iterator:",k);
         k++;
 }
while(k<5);


 