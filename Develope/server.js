const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;


//HTML Routes
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/note.html"));
});