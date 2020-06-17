const express = require("express");
const path = require("path");

const router = express.Router();

// HTML Routes---------------------------------------------------------------------------
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/note.html"));
});

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Exports the router to be used as middleware
module.exports = router;