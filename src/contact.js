const contactDiv = document.createElement("div");
const contactUs = document.createElement("h1");
const phone = document.createElement("h3");
const address = document.createElement("h3");
contactDiv.classList.add("main");
contactUs.innerText = "Contact Us";
phone.innerText = "Phone: +1(859) 588-70098";
address.innerText = "6474 Main Fake Petersburg, Kentucky(KY), 41080";
contactDiv.append(contactUs, phone, address);

export { contactDiv };
