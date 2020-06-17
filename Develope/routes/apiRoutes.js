const express = require('express');
const fs = require('fs');
const data = require("../db/db.json");
const router = express.Router();

router.get("/notes", function (req, res) {
    res.json(data);
});