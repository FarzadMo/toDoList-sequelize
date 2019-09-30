//dependencies
var express = require("express");

//defining the app
var app = express();
var PORT = process.env.PORT || 8083;

//middlewares for data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//access to static content
app.use(express.static("public"));

//requiring the model later to be synced
var db = require("./models");

//requiring routes
require("./routes/api-routes.js")(app);

//syncing the model before listening to port
app.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("App is listening on PORT " + PORT)
    });
});