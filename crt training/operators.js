//operators in js
let a=10;
let b=20;
console.log("arithematic operators ")

console.log("sum:",a+b);
console.log("difference:",a-b);
console.log("product:",a*b);
console.log("quotient:",a/b);
console.log("Remainder:",a%b);
console.log("Exponent:",a**b);

//assignment operators
let x=10
x+=5;
x-=3;
x*=2;
x/=4;
x%=3;

console.log("Assignment operators ")

console.log("x after assignmens:",x);


console.log("\n");
//Arithematic operators
let c=10;
let d=20;
console.log("Arthmetic operators");
console.log("c=",c,", d=",d);
console.log("sum",c+d);
console.log("difference",c-d);
console.log("multiplaction",c*d);
console.log("division",c/d);
console.log("modulas",c%d);
console.log("emponent",c**d);





//Comparasion operators
console.log("Comparasion operators");
console.log("is:equal",a==b);
console.log("isstrictequal:",a===b);
console.log("isnotequal",a!=b);
console.log("isstrictnotequal",a!==b);
console.log("isgreater",a>b);
console.log("islessthan",a<b);
console.log("isgreaterthanequal",a>=b);
console.log("islesstahnequal",a<=b);



//logical operators
let andoperator=(a>0 && b>0);
let oroperator=(a>0 || b<0);
let notoperator=!(a<0);
console.log("logical operators");
console.log("logicalAND:",andoperator);
console.log("logicalOR:",oroperator);
console.log("logicalNOT:",notoperator);
console.log("\n");

//bitwise operators

console.log("Bitwise operators");
console.log("Bitwise AND:",a&b);
console.log("Bitwise OR:",a | b);
console.log("Bitwise XOR:",a^b);
console.log("Bitwise NOT:",~a);
console.log("Bitwise Leftshift:",a<<1);
console.log("Bitwise Rightshift:",a>>1);
console.log("\n");

//Ternary operators
let age=18;
let eligibility=(age>=18)? "Eligibility  to vote" :"not eligibility to vote";
console.log("ternary operators");
console.log("Eligibility:",eligibility);
console.log("\n");

//Typeof operators
let variableType=typeof a;
console.log("Typeof operators");
console.log("Type of variable a:" ,variableType);
console.log("\n");