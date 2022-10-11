'use strict';

// console.log('hello');

// Seattle Store
//                                        div id in html
let seattleList = document.getElementById('seattleList'); //lets javascript know about element
// let seattleUnorderedList = document.getElementById('seattleUnorderedList');

// console.log(seattleList);

// TO ADD ELEMENTS TO DOM
// 1 - create the html element -- let art = document.createElement('article'); art is variable name, article is the html tag
// 2 - given content (text, or image, or another element)
// 3 -append it to DOM

let seattleUnorderedList = document.createElement('ul');// creates the element
seattleUnorderedList.textContent = 'testing ul';// created text in tag
//seattleUnorderedList.appendChild(ul);//apended to html



//seattleList.appendChild(div); //appended to html


let custHourly = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiePerHour: 6.3,
  custPerHour: [],
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function () { // getting a random number between two values, inclusive
    for (let i = 0; i < custHourly.length; i++) {
      this.custPerHour.push(randCust(this.minCust, this.maxCust));
    }
    // return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  avgCookie: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.cookiesSoldEachHourArray.push(Math.round(this.custPerHour[i] * this.avgCookiePerHour));

    }
  },
};
for (let i = 0; i < custHourly.length; i++) {
  let li = document.createElement('li');
  li.textContent = seattle.cookiesSoldEachHourArray[i];// created text content in the article tag
  seattleList.appendChild(li);
}


function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(seattle.getRandomCustomers()); //random value IS being generated
seattle.getRandomCustomers();
seattle.avgCookie();


console.log(seattle.dailyTotal);
console.log(seattle);
console.log(seattle.cookiesSoldEachHourArray);
console.log(seattle.custPerHour);
