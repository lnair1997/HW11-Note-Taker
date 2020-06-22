const express = require('express');
const fs = require('fs');
let data = require("../db/db.json");
const router = express.Router();
const uniqid = require("uniqid");

router.get("/notes", (req, res) => {
    res.json(data);
});

router.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uniqid();
    data.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        };
    });
    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    let notesId = req.params.id;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == notesId) {
            data = data.filter(note => note.id != data[i].id);
            return res.send(data[i]);
        };
    };
    return res.json(false);
});

module.exports = router;
