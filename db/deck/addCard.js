const database = require("../index");

// deck.addCard = function( cardObject ) {
//   let currentDate = new Date();
//   cardObject["createdAt"] = currentDate;
//   cardObject["updatedAt"] = currentDate;

//   return database.one('INSERT INTO deck (pipvalue,pipface,pipsuit,image,"imageBack","createdAt","updatedAt") VALUES(${pipvalue},${pipface},${pipsuit},${image},${imageBack},${createdAt},${updatedAt}) RETURNING id',
//   {
//     pipvalue: cardObject.pipvalue,
//     pipface: cardObject.pipface,
//     pipsuit: cardObject.pipsuit,
//     image: cardObject.image,
//     imageBack: cardObject.imageBack,
//     createdAt: cardObject.createdAt,
//     updatedAt: cardObject.updatedAt
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// };