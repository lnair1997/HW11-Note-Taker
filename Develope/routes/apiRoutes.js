const express = require('express');
const fs = require('fs');
const data = require("../db/db.json");
const router = express.Router();
let newData = data;

router.get("/notes", function (req, res) {
    res.json(data);
});

router.post("/notes", function (req, res) {
    data.push(req.body);
    res.json(req.body);

    fs.writeFile("./db/db.json", JSON.stringify(newData), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully\n");
        };
    });
});

router.delete("/notes/:id", function (req, res) {
    const id = req.param.id;

    for (let i = 0; i < newData.length; i++) {
        if (id === newData[i].id) {
            return res.json(true);
        }
    }

    
});

//1. read db.json
//2. remove note with ID
//3. rewrite notes to json file
module.exports = router;

// app.get("/api/characters/:character", function(req, res) {
//     const chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (let i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });