"use strict";

const luku = +prompt("Anna positiivinen kokonaisluku: ");

let summa = 0;

for (let i = luku; i >= 1; i--) {
  summa += i;
}

document.querySelector("#target").innerText = `Luonnolliset lukujen summa on ${summa}.`;
