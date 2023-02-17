const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./app/routes/user.routes")


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
let corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(route)

// Routes

// app.get('/', users.getUsers);

// app.get("/", (req, res) => {
//   res.send("Welcome to the e-commerce API!");
// });

// Listen
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
