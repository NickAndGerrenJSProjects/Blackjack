'use strict';
const fs = require("fs");
const deck = fs.readFileSync("./assets/deck.json");
const deckContent = JSON.parse(deck);
const deckTable = require("../db/deck");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let cardObject = {
      pipvalue: deckContent.deck[0].pipvalue,
      pipface: deckContent.deck[0].pipface,
      pipsuit: deckContent.deck[0].pipsuit, 
      image: deckContent.deck[0].image,
      imageBack: "blackjack/assets/cardsImages/red_back.png"
    };
    
    deckTable.addCard(cardObject)
    .then(( result ) => {
      console.log(result);
      console.log("You did it!");
    })
    .catch((error) => {
      console.log("Error adding in a card!"); 
    })
  },
  down: (queryInterface, Sequelize) => {
    //return queryInterface.dropTable('playercards');
  }
};