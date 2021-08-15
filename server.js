//DEPENDENCIES ===================================================================
const express = require("express");
const fs = require("fs");
const path = require("path");

//PORTS ==========================================================================
const app = express();
const PORT = process.env.PORT || 3000;

//DATA HANDLING ==================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.search(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h1> Hello World </h1>`);
});

//SERVER LISTENER ================================================================
app.listen(PORT, () =>
  console.log(`App listening on PORT http://localhost:${PORT}`)
);
