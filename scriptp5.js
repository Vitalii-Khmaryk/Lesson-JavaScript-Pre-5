function start() {
    let n=0;
    return function iner(num) {
       n+=num;
       console.log('sum = ',n);
    }
}
let sum=start();
sum(3);
sum(5);
sum(228);


import * as shop from './shop.js';

console.log(shop.showBalance());

console.log(shop.showBeer());
console.log(shop.sellBeer(4));
console.log(shop.showBalance());
console.log(shop.showBeer());


console.log(shop.showVine());
console.log(shop.sellVine(7));
console.log(shop.showBalance());
console.log(shop.showVine());

console.log(shop.showPepci());
console.log(shop.sellPepci(8));
console.log(shop.showBalance());
console.log(shop.showPepci());