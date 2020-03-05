// Listes des images 6 = 2 x 3
var cartes = ["1", "2", "3", "1", "2", "3"]
  .map(c => [c, Math.random()])
  .sort((cartes, b) => cartes[1] - b[1])
  .map(c => c[0]);

var cards = document.getElementsByTagName("img");

for (let i = 0; i < cards.length; i++) {
  cards[i].src2 = "images/fruit" + cartes[i] + ".jpg";
}

var etapes = 1;
var carte_1, carte_2;

document.addEventListener("click", function(e) {
  switch (etapes) {
    case 1: // 1er click
      if (e.target.tagName == "IMG") {
        e.target.src = e.target.src2;
        carte_1 = e.target;
        etapes = 2;
      }
      break;
    case 2: // 2ème click
      if (e.target.tagName == "IMG") {
        e.target.src = e.target.src2;
        carte_2 = e.target;
        etapes = 3;
      }
      timer = setTimeout(verifier, 1000);
      break;
    case 3: // click : incorrecte
      clearTimeout(timer);
      verifier();
      break;
  }
});

// MemoryGame :
// Le 1er click : retourne l'image => memoriser l'image retournée
// Le 2ème click : retouren l'image puis compare au 1er
// - comparer les deux images
// -- si identiques => supprimes les
// -- sinon => les retournées
// - Un timer

function verifier() {
  if (carte_1.src2 == carte_2.src2) {
    carte_1.replaceWith(document.createElement("span"));
    carte_2.replaceWith(document.createElement("span"));
  } else {
    carte_2.src = carte_1.src = "images/card.svg";
  }
  etapes = 1;
}
