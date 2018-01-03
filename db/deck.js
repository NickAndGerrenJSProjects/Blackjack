const database = require("./index");

module.exports = {
  addCard: require("./deck/addCard"),
  deleteCard: require("./deck/deleteCard")
}; 




// deck.deleteCard = function( id, table ) {
//   return database.none('DELETE FROM ' + table +  'WHERE id = $1', [id])
//   .catch((error) => {
//     console.log(error); 
//   })
// };

