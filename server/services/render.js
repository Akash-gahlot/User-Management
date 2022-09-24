const axios = require("axios");
const got = require('got');
const superagent = require('superagent');
exports.homeroute =  (req, resp) => {
  // Make a get request to
 //const url = "https://dummyjson.com/products/1";
 const url = "http://localhost:3000/api/find";
 axios.get(url,{responseType: 'json'})
        .then(function (response) {
            console.log(response.data);
             resp.render("index", { Data: response.data });
        })
    .catch((err) => {
       resp.send(err);
    });
};


exports.adduser =  (req, resp) => {
   resp.render("adduser");
};

exports.updateuser =  (req, resp) => {
    axios.get("http://localhost:3000/api/find", { params: { id: req.query.id } })
        .then(function (response) { 
            resp.render("updateuser.ejs", { Data: response.data });
        }).catch((err) => { 
            resp.send(err);
        })
};
