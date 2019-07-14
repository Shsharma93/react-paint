const express = require('express');
const app = express();
var cors = require('cors');
const query = require('./query');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/', query);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening to port ${port}`));
