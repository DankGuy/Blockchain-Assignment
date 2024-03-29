const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/registration.html"));
});

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);
