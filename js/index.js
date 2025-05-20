const quotes = [
  "When a man learns to love, he must bear the risk of hatred – Madara Uchiha",
  "The true measure of a shinobi is not how he lives, but how he dies – Jiraiya",
  "The moment you think of giving up, think of the reason why you held on so long – Natsu Dragneel",
  "You can’t sit around envying other people’s worlds. You have to go out and change your own – Sheryl Nome"
];
let lastRandom = -1;
function quoteChanger() {

  let random = Math.floor(Math.random() * quotes.length);

  if (random === lastRandom) {
    random = (random + 1) % quotes.length;
  }

  lastRandom = random;
  document.getElementById("quote").innerHTML = quotes[random];
}