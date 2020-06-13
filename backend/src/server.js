const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function(req,res){
    res.send("Oi");
})

app.listen(3333);