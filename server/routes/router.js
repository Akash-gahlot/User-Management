const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

//pages
route.get("", services.homeroute);
route.get("/Add-user", services.adduser);
route.get("/UpdateUser", services.updateuser);



//API
route.post("/add", controller.create);
route.get("/api/find", controller.allusers);
route.post("/update/:id",controller.Update);
route.get("/delete/:id", controller.delete);


module.exports = route