const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

const PORT = 9000 

app.listen(PORT, () => {
    console.log("server is listening at 9000")
})

app.get('/',(request, response) => {
    response.json({message: "Welcome to the nod-epxress"})
})



