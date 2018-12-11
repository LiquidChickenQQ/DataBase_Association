require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;

require('./models')

app.listen(PORT, () => {
    console.log(`the server is listening on port: ${PORT}`);
})