// app/routes.js

// grab the User and Todo models
var User = require('./models/user');
var Todo = require('./models/todo');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/users/login', function(req, res) {
            // check User login
            User.find(req.body,function(err, response) {
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(response); 
            });
        });
     app.get('/api/todo', function(req, res) {
            var TodoData = req.body
            // use mongoose to create todo
            Todo.create(TodoData, function (err, result) {
            if (err) {
            res.status(500);
            return res.send({reason: err.toString()});
            } else if (result && result.reason) {
            return res.status(400).send(result);
            }
            return res.status(201).send(result);
    });        });
     app.get('/api/todo/list', function(req, res) {
            var TodoData = req.body
            // use mongoose to get all todos in the database
            Todo.find(function (err, result) {
            if (err) {
            res.status(500);
            return res.send({reason: err.toString()});
            } else if (result && result.reason) {
            return res.status(400).send(result);
            }
            return res.status(201).send(result);
            });        
    });
     app.get('/api/todo/:id', function(req, res) {
            var todoDataID = req.params.id
            if(!todoDataID) {
                return res.send({reason: 'ToDo Id required'});
            }
            // use mongoose to delete Todo in the database
            Todo.remove({_id:todoDataID},function (err, result) {
            if (err) {
                res.status(500);
                return res.send({reason: err.toString()});
            } else if (result && result.reason) {
                return res.status(400).send(result);
            }
            return res.status(201).send(result);
            });        
    });
        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('index.html'); // load our public/index.html file
        });

    };

