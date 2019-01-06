var express = require("express"),
    app     = express();

//PORT DECLARATION    
var port = process.env.PORT || 3000;

//ROUTES

app.get("/" , (req,res) => {
    res.send("Hi");
});

app.listen(port , () => {
   console.log("Server Is Active at " + port) 
});