const fs = require("fs");
const noteData = require("./db/noteData");


//API Routes---------------------------------------------------------------------------
app.get("/api/notes", function (req, res) {
    res.json(noteData);
});

app.post ("api/notes", function(req, res) {
    noteData.push(req.body);
    res.json(true);
})
