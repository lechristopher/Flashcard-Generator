var inquirer = require('inquirer');

//Constructor Function For Basic Card

function BasicCard(front, back){
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard ("Who was the first president of the United States?", "George Washington");

console.log("\n---------------------------------------------------------------");
console.log(firstPresident.front);
console.log("\n---------------------------------------------------------------");
console.log(firstPresident.back);
console.log("\n---------------------------------------------------------------");
BasicCard();

module.exports = BasicCard;
