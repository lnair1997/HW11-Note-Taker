const express = require('express');
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, function () {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});