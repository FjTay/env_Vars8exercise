const express = require("express")
const server = express()
require('dotenv').config()
const port = process.env.SERVER_PORT;
server.listen(port, () => console.log(`I am ${process.env.MY_NAME}, from ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}.`));
