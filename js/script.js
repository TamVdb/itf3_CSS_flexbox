const CARDS = document.querySelectorAll(".card");
const SHUFFLE = document.getElementById("shuffle");

SHUFFLE.addEventListener("click", () => {
   for (let card of CARDS) {
      card.style.order = Math.floor(Math.random() * CARDS.length * 10);
   }
});

// const CARDS = document.querySelectorAll(".card");
// const SHUFFLE = document.getElementById("shuffle");

// let orders = [1, 2, 3, 4, 5, 6];

// SHUFFLE.addEventListener("click", (index) => {
//    for (let card of CARDS) {
//       index = Math.floor(Math.random() * (orders.length + 1)); // Le nombre d'éléments + 1 étant donné que Math.floor() arrondi en dessous
//       console.log(index);
//       card.style.order = orders[index];
//    }
// });
