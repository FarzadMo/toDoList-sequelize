//this file provides routes for the CRUD operation in the app

var models = require("./../models");

module.exports = function (app) {

    //GET route for getting all the Todos
    app.get("/api/todos", function (req, res) {
        db.Todo.findAll({}).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    //POST route for saving a new Todo
    app.post("/api/todos", function (req, res) {
        db.Todo.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbTodo) {
            res.json(dbTodo);
        }).catch(function (err) {
            res.json(err);
        });
    });

    //DELETE route for deleting Todos
    app.delete("/api/todos/:id", function (req, res) {
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTodo) {
            res.json(dbTodo)
        });
    });

    //PUT route for updateing todos
    app.put("/api/todos", function (req, res) {
        db.Todo.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTodo) {
            res.json(dbTodo);
        }).catch(function (err) {
            res.json(err);
        });
    });












};