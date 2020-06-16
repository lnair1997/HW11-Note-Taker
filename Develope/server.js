const express = require('express');
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//HTML Routes---------------------------------------------------------------------------
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/note.html"));
});

//API Routes---------------------------------------------------------------------------
app.get("/api/notes", (req, res) => {
    console.log(`/api/notes called`);
    res.json("./db/notes");
});



app.listen(PORT, function () {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});