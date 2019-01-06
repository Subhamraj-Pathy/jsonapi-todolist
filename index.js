var express = require("express"),
    app     = express();
    
var todoRoutes = require("./routes/todo");

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