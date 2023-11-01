/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronouns = ["My", "Their", "Her", "His", "Our", "The"];
const adj = [
  "Zany",
  "Wacky",
  "Goofy",
  "Quirky",
  "Whimsical",
  "Kooky",
  "Absurd",
  "Ridiculous",
  "Hilarious",
  "Outrageous",
];
const nouns = [
  "Dog",
  "Cat",
  "House",
  "Car",
  "Book",
  "Computer",
  "Phone",
  "Tree",
  "Chair",
  "Table",
];

function generateCombinations() {
    const combinationsContainer = document.getElementById("combinations");
    let combinationsHtml = "";
  
    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          const combination = `${pronouns[i]}${adj[j]}${nouns[k]}`;
          console.log(combination + ".com");
          combinationsHtml += `<p>${combination + ".com"}</p>`;
        }
      }
    }
  
    combinationsContainer.innerHTML = combinationsHtml;
  }

generateCombinations();
