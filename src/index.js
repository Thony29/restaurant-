// import Img from "./img3.jpg";
// import Ionic from "./ionic.png";
import Webpack from "./webpack.png";
import "./style.css";
import { homeDiv } from "./home";
import { menuDiv } from "./menu";

import { contactDiv } from "./contact";

//header
const header = document.createElement("header");
const title = document.createElement("h1");
title.innerText = "Spice Kitchen";
header.appendChild(title);
container.appendChild(header);

// // navbar

const navbar = document.createElement("navbar");
const tabNames = ["Home", "Menu", "Contact"];
tabNames.map((item) => {
  const div = document.createElement("div");
  const tabName = document.createElement("h3");
  tabName.innerText = item;
  div.appendChild(tabName);
  div.classList.add("tab");
  navbar.appendChild(div);
});
container.appendChild(navbar);

//Append home section as default

const section = document.createElement("section");
section.appendChild(homeDiv);
container.appendChild(section);

//footer

const footer = document.createElement("footer");
const link = document.createElement("a");
const icon = document.createElement("img");
const credits = document.createElement("p");
link.setAttribute("href", "https://github.com/Thony29/restaurant-.git");
icon.src = Webpack;
icon.classList.add("footer_img");
credits.innerText = "Made by: Thony29";
icon.classList.add("footer_logo");
link.appendChild(icon);
footer.append(link, credits);
container.append(footer);
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// Logic to switch tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove previous section
    let prevSection = document.querySelector("section");
    removeAllChildNodes(prevSection);
    if (tab.innerText === "Home") {
      prevSection.appendChild(homeDiv);
    } else if (tab.innerText === "Menu") {
      prevSection.appendChild(menuDiv);
    } else {
      prevSection.appendChild(contactDiv);
    }
  });
});

