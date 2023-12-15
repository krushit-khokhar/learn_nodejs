const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars');
const hbs = require('handlebars');
const app = express();

const adminData = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");


app.engine("hbs",expressHbs.engine({
    extname: "hbs",
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts/",
  }));

app.set('view engine', 'hbs');
app.set('views','views');

hbs.registerHelper('hasProducts', function() {
  return true;
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req, res, next)=>{
    res.status(404).render('404',{pageTitle:"Page Not Found"})
})


app.listen(3030)