const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();

router.get("/product",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","product.html"))
})

router.post("/product",(req,res,next)=>{
    const {body} = req;
    console.log(body)
    res.redirect("/");
})

module.exports = router;
