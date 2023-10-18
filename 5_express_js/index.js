const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));

app.use("/", (req, res, next)=>{
    next();
})
app.use("/add-product",(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>")
})

app.post("/product",(req,res,next)=>{
    const {body} = req;
    console.log(body)
    res.redirect("/");
})
app.use("/", (req, res, next)=>{
    res.send("<h1>Hello Express Js!</h1>")
})


app.listen(3030)