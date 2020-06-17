const fs = require("fs");
const noteData = require("./db/noteData");
const express

//API Routes---------------------------------------------------------------------------
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });
    
    app.post ("/api/notes", function(req, res) {
        const newNote = req.body;
        noteData.push(newNote);
        res.json(newNote);
    });
};

