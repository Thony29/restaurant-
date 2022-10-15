import Img2 from "./img2.jpg";
// import Img4 from "./img4.jpg";
import Img5 from "./img5.jpg";
// import Img6 from "./img6.jpg";
// import Img1 from "./img1.jpeg";

//create menu selection
const menuDiv = document.createElement("div");
const dish = document.createElement("h1");
const dishDiscription = document.createElement("p");
const myImg2 = document.createElement("img");
dish.innerText = "Food food";
dishDiscription.innerText = "Great tasty and delicious food";
myImg2.src = Img2;
menuDiv.classList.add("main");
menuDiv.classList.add("menuDiv");
menuDiv.append(dish, dishDiscription, myImg2);

const menuDiv2 = document.createElement("div");
const dish2 = document.createElement("h1");
const dishDiscription2 = document.createElement("p");
const myImg5 = document.createElement("img");
dish2.innerText = "Great food";
dishDiscription2.innerText = "Great tasty and delicious food";
myImg5.src = Img5;
menuDiv.classList.add("main");
menuDiv.classList.add("menu2");
menuDiv2.classList.add("menuDiv");
menuDiv.append(dish2, dishDiscription2, myImg5);

export { menuDiv };

