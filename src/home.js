import Img3 from "./img3.jpg";

// create home section

const homeDiv = document.createElement("div");
const home = document.createElement("h1");
const paragraph = document.createElement("p");
const img3 = document.createElement("img");
const paragraph2 = document.createElement("p");
homeDiv.classList.add("main",'homeDiv');
home.innerText = "Welcome to Spice Kitchen";
paragraph.innerText =
  "Food is not rational. Food is culture, habit, craving, and identity.";
img3.src = Img3;
img3.classList.add('homeImg')
paragraph2.innerText = "Come have a taste of good food today.";
homeDiv.append(home, paragraph, img3, paragraph2);

export { homeDiv };



// import Img3 from "./img3.jpg";
// const img3 = document.createElement("img");
// img3.src = Img3;
// img3.classList.add('homeImg')
// homeDiv.append(home, paragraph, img3, paragraph2);