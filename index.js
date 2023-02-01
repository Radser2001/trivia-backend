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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
