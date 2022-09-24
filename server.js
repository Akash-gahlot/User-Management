const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const morgan = require('morgan');
const bodyparser = require("body-parser");
const cors = require('cors');

const connectDB = require('./server/database/connection');
const api_req = require('./server/controller/controller');




dotenv.config({ path:'config.env'});
const PORT = process.env.PORT || 3000;


app.use(cors());

// log requests
app.use(morgan('tiny'));


// connection with DB
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))


app.set("view engine", "ejs");




app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/", require('./server/routes/router'));




app.listen(PORT, () => { console.log(`Server is running on localhost http and port number is :${PORT}`)});

