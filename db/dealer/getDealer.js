const database = require("./index");

const READ_QUERY = 'SELECT * FROM dealer where id = $1'; 

const getDealer = id => 
  database.one( READ_QUERY, [ id ] )
  .catch(( error ) => {
    console.log(error);
  });

module.exports = getDealer; 