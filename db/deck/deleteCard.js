const database = require("../index");
const DELETE_CARD_QUERY = 'DELETE FROM deck WHERE id = $1';
const deleteCard = id => database.none(DELETE_CARD_QUERY, [id]);

module.exports = deleteCard;