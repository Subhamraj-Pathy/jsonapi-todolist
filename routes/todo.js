var express = require("express");
var router  = express.Router();
var db      = require("../models");

router.get('/' , (req,res) => {
    db.Todo.find()
    .then((todos)=>{
        res.json(todos);
    })
    .catch((err)=>{
        res.send(err);
    })
});

router.post('/' , (req,res) => {
   db.Todo.create(req.body)
   .then((newTodo)=>{
        res.json(newTodo);
    })
    .catch((err)=>{
        res.send(err);
    })
});

module.exports = router;