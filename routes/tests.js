const express = require("express");
const router = express.Router();
const database = require('../db/index');

router.get("/", (request, response) => {
  database.any(`INSERT INTO test_table ("testString") VALUES ('Hello at $
{Date.now()}')`)
    .then(_ => database.any(`SELECT * FROM test_table`))
    .then(results => response.json(results))
    .catch(error => {
      console.log(error)
      response.json({ error })
    })
});

module.exports = router;