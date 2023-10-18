const express = require("express");
const app = express();
const bodyParser = require('body-parser')


const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");



app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes)
app.use(shopRoutes)



app.listen(3030)