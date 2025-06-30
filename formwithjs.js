
let form= document.getElementById("myform");
form.id="myform";
let h6=document.createElement("h6")
h6.textContent="select your hobbies"
form.appendChild(h6);


// let label=document.createElement("label")
// label.textContent="1.playing";
// form.appendChild(label)


// const subscribeCheckbox = document.createElement("input");
// subscribeCheckbox.type = "checkbox";
// subscribeCheckbox.name = "subscribe";
// subscribeCheckbox.id = "subscribe";
// form.appendChild(subscribeCheckbox);



// let label=document.createElement("label")
// label.textContent="2.singing";
// form.appendChild(label)


// const subscribeCheckbox = document.createElement("input");
// subscribeCheckbox.type = "checkbox";
// subscribeCheckbox.name = "subscribe";
// subscribeCheckbox.id = "subscribe";
// form.appendChild(subscribeCheckbox);
const form = document.getElementById('myForm');

// 1. Playing
const label1 = document.createElement("label");
label1.textContent = "1. Playing";
label1.htmlFor = "playing";  // Link label to checkbox
form.appendChild(label1);

const checkbox1 = document.createElement("input");
checkbox1.type = "checkbox";
checkbox1.name = "hobby";
checkbox1.id = "playing";
checkbox1.value = "Playing";
form.appendChild(checkbox1);

form.appendChild(document.createElement("br")); // line break

// 2. Singing
const label2 = document.createElement("label");
label2.textContent = "2. Singing";
label2.htmlFor = "singing";  // Link label to checkbox
form.appendChild(label2);

const checkbox2 = document.createElement("input");
checkbox2.type = "checkbox";
checkbox2.name = "hobby";
checkbox2.id = "singing";
checkbox2.value = "Singing";
form.appendChild(checkbox2);

form.appendChild(document.createElement("br")); 





