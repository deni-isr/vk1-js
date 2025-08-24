"use strict";

const tulosDiv = document.getElementById("tulos");

const sivuA = Number(prompt("Anna sivun A pituus:"));
const sivuB = Number(prompt("Anna sivun B pituus:"));
const sivuC = Number(prompt("Anna sivun C pituus:"));

let kolmionTyyppi = "";

if (sivuA === sivuB && sivuB === sivuC) {
  kolmionTyyppi = "Tasa-arvoinen kolmio";
} else if (sivuA === sivuB || sivuB === sivuC || sivuA === sivuC) {
  kolmionTyyppi = "Tasakylkinen kolmio";
} else if (!(sivuA === sivuB || sivuB === sivuC || sivuA === sivuC)) {
  kolmionTyyppi = "Erisuuntainen kolmio";
}

tulosDiv.innerHTML = "<p>" + kolmionTyyppi + "</p>";
