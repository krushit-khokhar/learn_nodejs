const express = require("express");
const app = express();
const path = require('path')
const rootDir = require('./util/path');
const bodyParser = require('body-parser')

const adminData = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

app.set('view engine', 'pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req, res, next)=>{
    res.sendFile(path.join(rootDir,"views","404.html"))
    // res.status(404).render('404',{pageTitle:"Page Not Found"})
})


app.listen(3030)