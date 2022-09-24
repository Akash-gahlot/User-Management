var user=require('../model/model')

//to add a new user
// exports.create =  (req, resp) => { 
//     if (!req.body) { 
//          resp.status(400).send({ message: "Details cannot be empty " });
//         return;
//     }
//     const userobj = new user({
//         Name: req.body.Name,
//         Email: req.body.Email,
//         Gender: req.body.Gender,
//         City: req.body.City
//     });
//     userobj.save(userobj).then(data => { 
//         resp.send(data)
//     }).catch(err => { 
//         resp.status(500).send({message:err.messsage|| "error while adding user"})
//     })  
// }

exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const User = new user({
        Name : req.body.Name,
        Email : req.body.Email,
        Gender: req.body.Gender,
        City : req.body.City
    })

    // save user in the database
    User
        .save(User)
        .then(data => {
            //res.send(data);
            res.redirect("/");
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

//to retrive info about all users or single user
exports.allusers = (req, resp) => { 
    if (req.query.id) {
        const id = req.query.id;
        user.findById(id).then(data => {
            if (!data) {
                resp.status(400).send({ message: `unable to retrive information ,may be id is wrong` });
            }
            else { 
                resp.send(data);
            }
        }).catch(err => { 
            resp.send("some error occured while retriving information");
        })
            
        
    }
    else { 
        user.find().then(data => {
            resp.send(data);
        }).catch(err => {
            resp.status(500).send({ message: err.message || "Some error occurred while retrieving information" });
        });
    }
   
}

//to update info about user on basis of id
exports.Update =  (req, resp) => { 
    if (!req.body) { 
        resp.status(400).send({ message: "Data cannot be emptyy" });
        return;
    }
    const id = req.params.id;
    user.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            resp.status(400).send({ message: `not able to update user with ${id} ,may be id is wrong` });
        }
        else {
           // resp.send(data)
           resp.redirect("/");
        }
    }).catch(err => {

        resp.status(500).send({ message: `error while updating user ${err}` });
    }); 
    
}

//to delete user
exports.delete = (req, resp) => {
    
    user.findOneAndRemove({_id:req.params.id}).then(data => { 
        if (!data) {
            resp.status(400).send({ message: `not able to delete user with ${id} ,may be id is wrong` });
        }
        else {
            resp.redirect('/');
        }
    }).catch(err => {
        resp.status(500).send({ message: `error while deleting the user ${err}` });
    })
    
 
}
