const database = require("../index");
//the purpose of this file is to insert a dealer row into the dealer table
//we would be calling this function each time we create a game
//user creates a game >> dealer is created >> query to get dealer's id >> assign tbe id to the dealerfk column 
//in the game table when you create the game row. 

const INSERT_DEALER_QUERY = `INSERT INTO dealer 
  (cardsfk,handvalue)
  VALUES($1,$2,$3,$4)`;