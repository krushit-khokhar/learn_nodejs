const express = require('express');

const router = express.Router();
const products = [];

router.get("/product",(req,res,next)=>{
   res.render('product',{pageTitle:"Add Product", path:"/admin/product", activeAddProduct:true})
})

router.post("/product",(req,res,next)=>{
if(req.body.title){

    products.push({title:req.body.title})
    res.redirect("/");
}
})

exports.routes = router;
exports.products = products;
