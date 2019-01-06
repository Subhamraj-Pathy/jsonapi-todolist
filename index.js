var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser");
    
var todoRoutes = require("./routes/todo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//PORT DECLARATION    
var port = process.env.PORT || 3000;

//ROUTES

app.get("/" , (req,res) => {
    res.send("Hi");
});

app.use('/api/todos' , todoRoutes);

app.listen(port , () => {
   console.log("Server Is Active at " + port) 
});