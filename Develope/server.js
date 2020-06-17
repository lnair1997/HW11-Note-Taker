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
// app.get("/api/notes", (req, res) => {
//     console.log(`/api/notes called`);
//     res.json("./db/db.json");
// });

app.get("/api/notes", (req, res) => {
    const data = fs.readFileSync("./db/db.json", "utf8");
    res.json(JSON.parse(data));
});

app.post("/api/notes", (req, res) => {
    console.log(`-----------POST /api/notes called`);
    const newNote = req.body;
    // newNote.id = uniqid();
    console.log('-----------Posting new note!');
    notes.push(newNote);
    res.json(newNote);
  });




app.listen(PORT, function () {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});