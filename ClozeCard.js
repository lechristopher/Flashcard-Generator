var inquirer = require('inquirer');

//Constructor Function For Cloze Card

function ClozeCard(text, cloze ){
    this.fulltext = text; // full text
    this.cloze = cloze; // cloze
    this.brokenCloze = "This doesn't work," + "oops";

    var index = this.fulltext.indexOf(cloze);
    if (index == -1){
      console.log(this.brokenCloze);
    }
    else {
        this.partial = this.fulltext.replace(cloze, "...");
    }
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log("\n---------------------------------------------------------------");
console.log(firstPresidentCloze.fulltext);
console.log("\n---------------------------------------------------------------");
console.log(firstPresidentCloze.cloze);
console.log("\n---------------------------------------------------------------");
console.log(firstPresidentCloze.partial);
console.log("\n---------------------------------------------------------------");

module.exports = ClozeCard;
