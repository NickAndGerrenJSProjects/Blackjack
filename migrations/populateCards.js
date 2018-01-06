'use strict';
const fs = require("fs");
const deck = fs.readFileSync("./assets/deck.json");
const deckContent = JSON.parse(deck);
const deckTable = require("../db/deck");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'deck', [
      {pipvalue: 2, pipface: "two", pipsuit: "clubs", image: "blackjack/assets/cardsImages/2C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 2, pipface: "two", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/2D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 2, pipface: "two", pipsuit: "hearts", image: "blackjack/assets/cardsImages/2H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 2, pipface: "two", pipsuit: "spades", image: "blackjack/assets/cardsImages/2S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 3, pipface: "three", pipsuit: "clubs", image: "blackjack/assets/cardsImages/3C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 3, pipface: "three", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/3D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 3, pipface: "three", pipsuit: "hearts", image: "blackjack/assets/cardsImages/3H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 3, pipface: "three", pipsuit: "spades", image: "blackjack/assets/cardsImages/3S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 4, pipface: "four", pipsuit: "clubs", image: "blackjack/assets/cardsImages/4C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 4, pipface: "four", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/4D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 4, pipface: "four", pipsuit: "hearts", image: "blackjack/assets/cardsImages/4H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 4, pipface: "four", pipsuit: "spades", image: "blackjack/assets/cardsImages/4S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 5, pipface: "five", pipsuit: "clubs", image: "blackjack/assets/cardsImages/5C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 5, pipface: "five", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/5D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 5, pipface: "five", pipsuit: "hearts", image: "blackjack/assets/cardsImages/5H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 5, pipface: "five", pipsuit: "spades", image: "blackjack/assets/cardsImages/5S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 6, pipface: "six", pipsuit: "clubs", image: "blackjack/assets/cardsImages/6C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 6, pipface: "six", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/6D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 6, pipface: "six", pipsuit: "hearts", image: "blackjack/assets/cardsImages/6H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 6, pipface: "six", pipsuit: "spades", image: "blackjack/assets/cardsImages/6S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 7, pipface: "seven", pipsuit: "clubs", image: "blackjack/assets/cardsImages/7C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 7, pipface: "seven", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/7D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 7, pipface: "seven", pipsuit: "hearts", image: "blackjack/assets/cardsImages/7H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 7, pipface: "seven", pipsuit: "spades", image: "blackjack/assets/cardsImages/7S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 8, pipface: "eight", pipsuit: "clubs", image: "blackjack/assets/cardsImages/8C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 8, pipface: "eight", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/8D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 8, pipface: "eight", pipsuit: "hearts", image: "blackjack/assets/cardsImages/8H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 8, pipface: "eight", pipsuit: "spades", image: "blackjack/assets/cardsImages/8S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 9, pipface: "nine", pipsuit: "clubs", image: "blackjack/assets/cardsImages/9C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 9, pipface: "nine", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/9D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 9, pipface: "nine", pipsuit: "hearts", image: "blackjack/assets/cardsImages/9H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 9, pipface: "nine", pipsuit: "spades", image: "blackjack/assets/cardsImages/9S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "ten", pipsuit: "clubs", image: "blackjack/assets/cardsImages/10C.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "ten", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/10D.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "ten", pipsuit: "hearts", image: "blackjack/assets/cardsImages/10H.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "ten", pipsuit: "spades", image: "blackjack/assets/cardsImages/10S.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "jack", pipsuit: "clubs", image: "blackjack/assets/cardsImages/JC.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "jack", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/JD.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "jack", pipsuit: "hearts", image: "blackjack/assets/cardsImages/JH.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "jack", pipsuit: "spades", image: "blackjack/assets/cardsImages/JS.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "queen", pipsuit: "clubs", image: "blackjack/assets/cardsImages/QC.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "queen", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/QD.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "queen", pipsuit: "hearts", image: "blackjack/assets/cardsImages/QH.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "queen", pipsuit: "spades", image: "blackjack/assets/cardsImages/QS.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "king", pipsuit: "clubs", image: "blackjack/assets/cardsImages/KC.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "king", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/KD.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "king", pipsuit: "hearts", image: "blackjack/assets/cardsImages/KH.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 10, pipface: "king", pipsuit: "spades", image: "blackjack/assets/cardsImages/KS.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 11, pipface: "ace", pipsuit: "clubs", image: "blackjack/assets/cardsImages/AC.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 11, pipface: "ace", pipsuit: "diamonds", image: "blackjack/assets/cardsImages/AD.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 11, pipface: "ace", pipsuit: "hearts", image: "blackjack/assets/cardsImages/AH.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      {pipvalue: 11, pipface: "ace", pipsuit: "spades", image: "blackjack/assets/cardsImages/AS.png", imageBack: "blackjack/assets/cardsImages/red_back.png", createdAt: new Date(), updatedAt: new Date() },
      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    //return queryInterface.dropTable('playercards');
  }
};