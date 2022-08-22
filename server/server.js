const express = require("express");
const ConnectionDB = require("./config/ConnectionDB");
const config = require("config");
const formation = require("./routes/formation");


const app = express();
app.use(express.json());
app.use('/formation', formation);


ConnectionDB();

var PORT = config.get('PORT') || 5000;

app.listen(PORT, (err) => 
     err ? console.error(err) : console.log(`Server is running on PORT ${PORT}`)
);
