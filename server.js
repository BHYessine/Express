const express = require("express");
const app = express();
const path = require("path");
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// app.get("/services", (req, res) => {
//     res.sendFile(__dirname, + "/public/services.html");
// })

// app.get("/style", (req, res) => {
//     res.sendFile(__dirname, + "/public/style.css");
// })
const date = new Date(Date.now());
const day = date.getDay();
const hour = date.getHours();
day == 6 || day == 7 || 17 < hour < 9
  ? app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "/public/holiday.html"));
    })
  : app.use(express.static("public"));

const port = 5000;
app.listen(port, () => console.log(`This server is running on ${port}`));
