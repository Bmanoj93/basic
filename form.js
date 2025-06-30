document.body.style.backgroundImage="idol.jpg";
document.body.style.alignItems="center";
const form = document.createElement("form");
form.id = "myForm";


const nameLabel = document.createElement("label");
nameLabel.textContent = "Enter your name: ";
form.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "username";
nameInput.placeholder = "Your name";
form.appendChild(nameInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const ageLabel = document.createElement("label");
ageLabel.textContent = "Enter your age: ";
form.appendChild(ageLabel);

const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.name = "age";
ageInput.placeholder = "Your age";
form.appendChild(ageInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


const genderLabel = document.createElement("label");
genderLabel.textContent = "Select yourGender: ";
form.appendChild(genderLabel);


const maleRadio = document.createElement("input");
maleRadio.type = "radio";
maleRadio.name = "gender";
maleRadio.value = "male";
maleRadio.id = "male";
form.appendChild(maleRadio);

const maleLabel = document.createElement("label");
maleLabel.htmlFor = "male";
maleLabel.textContent = " Male";
form.appendChild(maleLabel);


const femaleRadio = document.createElement("input");
femaleRadio.type = "radio";
femaleRadio.name = "gender";
femaleRadio.value = "female";
femaleRadio.id = "female";
form.appendChild(femaleRadio);

const femaleLabel = document.createElement("label");
femaleLabel.htmlFor = "female";
femaleLabel.textContent = " Female";
form.appendChild(femaleLabel);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));





const emaillabel=document.createElement("label");
emaillabel.htmlFor="Email";
emaillabel.textContent="Enter your email";
form.appendChild(emaillabel);



const inputemail=document.createElement("input")
inputemail.type="email";
inputemail.name="Email";
inputemail.id="Email";
form.appendChild(inputemail);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
const subscribeCheckbox = document.createElement("input");
subscribeCheckbox.type = "checkbox";
subscribeCheckbox.name = "subscribe";
subscribeCheckbox.id = "subscribe";
form.appendChild(subscribeCheckbox);

const subscribeLabel = document.createElement("label");
subscribeLabel.htmlFor = "subscribe";
subscribeLabel.textContent = " Subscribe to channel";
form.appendChild(subscribeLabel);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
form.appendChild(submitButton);


document.body.appendChild(form);
