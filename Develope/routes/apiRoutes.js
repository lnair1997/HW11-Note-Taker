const express = require('express');
const fs = require('fs');
let data = require("../db/db.json");
const router = express.Router();
const uniqid = require("uniqid");

router.get("/notes", function (req, res) {
    res.json(data);
});



router.post("/notes", function (req, res) {

    const newNote = req.body;
    newNote.id = uniqid();

    data.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully\n");
        };
    });

    res.json(newNote);
});



router.delete("/notes/:id", function (req, res) {
    let notesId = req.params.id;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == notesId) {
            data = data.filter(note => note.id != data[i].id);
            return res.send(data[i]);
        }
    }

    return res.json(false);
});




//1. read db.json
//2. remove note with ID
//3. rewrite notes to json file
module.exports = router;
