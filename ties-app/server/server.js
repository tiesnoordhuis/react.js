const express = require('express');

var app = express();

app.listen(80);

app.use(express.static("../build"));
