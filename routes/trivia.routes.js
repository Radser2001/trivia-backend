const express = require("express");
const {
  getAll,
  addNewFact,
  getRandomTrivia,
} = require("../controllers/trivia");
const triviaRoutes = express.Router();

triviaRoutes.route("/").get((req, res) => {
  res.json("Trivia server up and running");
});

//get endpoint
triviaRoutes.route("/trivia").get(getAll);

//add new trivia (temporary)
triviaRoutes.route("/newTrivia").post(addNewFact);

//get question by id
triviaRoutes.route("/trivia/random").get(getRandomTrivia);

module.exports = triviaRoutes;
