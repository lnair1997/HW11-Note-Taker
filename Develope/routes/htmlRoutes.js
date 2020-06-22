const express = require("express");
const path = require("path");
const router = express.Router();

// HTML Routes---------------------------------------------------------------------------
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Exports the router to be used as middleware
module.exports = router;