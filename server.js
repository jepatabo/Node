/* Empty JS object to act as endpoint for all routes */
projectData = {};

const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("website"));

// Routes
const router = express.Router();

// GET route
router.get("/all", (req, res) => {
  res.send(projectData);
});

// POST route
router.post("/add", (req, res) => {
  res.send("POST received");
});

// POST an animal
const data = [];

router.post("/animal", (req, res) => {
  data.push(req.body);
  const animal = req.body; // Get the animal data from the request body
  res.send(animal); // Send the received animal data back as the response
});

// Mount the router
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.get("/test", (req, res) => {
//   res.send("Hi, the server is working...");
// });
