let balance = 1000;

let beer = 100;
let beerPrice = 30;

let vine = 50;
let vinePrice = 40;

let pepci = 80;
let pepciPrice = 20;

function showBalance() {
  return `Balance ${balance}`;
}
function showBeer() {
  return `Пива на складі ${beer}`;
}
function showVine() {
  return `Вина на складі ${vine}`;
}
function showPepci() {
  return `Пепсі на складі ${pepci}`;
}

function sellBeer(countBeer = "0") {
  if (countBeer <= beer) {
    beer -= countBeer;
    balance += countBeer * beerPrice;
    return `Ціна за пиво: ${countBeer * beerPrice} грн`;
  }
  return `Вибачте,але на складі залишилось ${beer} штук пива`;
}
function sellVine(countVine = "0") {
  if (countVine <= vine) {
    vine -= countVine;
    balance += countVine * vinePrice;
    return `Ціна за вино: ${countVine * vinePrice} грн`;
  }
  return `Вибачте,але на складі залишилось ${vine} штук вина`;
}

function sellPepci(countPepci = "0") {
  if (countPepci <= pepci) {
    pepci -= countPepci;
    balance += countPepci * pepciPrice;
    return `Ціна за пепсі: ${countPepci * pepciPrice} грн`;
  }
  return `Вибачте,але на складі залишилось ${pepci} штук пепсі`;
}

export {
  showBalance,
  showBeer,
  sellBeer,
  showVine,
  sellVine,
  showPepci,
  sellPepci,
};
