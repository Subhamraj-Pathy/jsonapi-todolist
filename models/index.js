var mongoose = require("mongoose");

mongoose.set('debug' , true);

mongoose.connect('mongodb://subhamraj:Subham1997@ds149984.mlab.com:49984/jsonapi-todolist');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
