const express = require("express");
const cors = require("cors");
const triviaRoutes = require("./routes/trivia.routes");
//instance of the application
const app = express();

app.use(cors());

//parse the json automatically
app.use(express.json());

//routes
app.use(triviaRoutes);

//start server
// app.listen(
//   //port
//   "3001",
//   //callback function (anonymous)
//   () => {
//     //confirm server is running
//     console.log("Server running on port 3001");
//   }
// );
