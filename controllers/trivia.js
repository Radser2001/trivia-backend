const trivia = require("../data/trivia");

const getAll = (
  //req -> access data from client
  //res -> send data to client
  req,
  res
) => {
  res.json(trivia);
};

const addNewFact = (req, res) => {
  //grab data sent by client
  //add data to the list
  //return new list

  const { question, answer } = req.body;
  const id = trivia.length + 1;
  const newTrivia = { id: id, question: question, answer: answer };
  trivia.push(newTrivia);
  res.json(trivia);
};

const getRandomTrivia = (req, res) => {
  const id = Math.floor(Math.random() * 10) + 1;
  let question;
  for (let i = 0; i < trivia.length; i++) {
    if (id == i + 1) {
      question = trivia[i];
    }
  }

  res.json(question);
};

module.exports = { getAll, addNewFact, getRandomTrivia };
