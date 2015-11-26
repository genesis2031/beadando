
// controllers/error.js
var express = require('express');
var router = express.Router();

var decorateTodos = require('../viewmodels/todo');

// Feladatlista oldal
router.get('/list', function (req, res) {
    req.app.models.todo.find().then(function (todos) {
        res.render('todos/list', {
            todos: decorateTodos(todos),
            messages: req.flash('info')
        });
    });
});

// Feladat felvitele
router.get('/new', function(req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('todos/new', {
        validationErrors: validationErrors,
        data: data,
    });
})

// Feladat felvitele POST
router.post('/new', function(req, res) {
   // adatok ellenőrzése
    req.checkBody('name', 'Hibás név').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('description').escape();
    req.checkBody('description', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/todos/new');
    }
    else {
        req.app.models.todo.create({
            status: 'new',
            priority:'Alacsony',
            name: req.body.name,
            description: req.body.description
        })
        .then(function (error) {
            //siker
            req.flash('info', 'Feladat sikeresen felvéve!');
            res.redirect('/todos/list');
        })
        .catch(function (err) {
            //hiba
            console.log(err)
        });
    }
})


//Feladat szerkesztése
router.get('/edit/:name', function(req, res) {
    var name = req.params.name;
    
     req.app.models.todo.findOne({name: name}).then(function (todo) {
        res.render('todos/edit', {
            todo: todo,
            messages: req.flash('info')
        });
    });
});

router.post('/edit/:name', function(req, res) {
     var name = req.params.name;
   // adatok ellenőrzése
    req.checkBody('name', 'Hibás név').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('description').escape();
    req.checkBody('description', 'Hibás Leírás').notEmpty().withMessage('Kőtelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/todos/edit/'+name);
    }
    else {
        req.app.models.todo.update({name: name},{
            name: req.body.name,
            status: req.body.status,
            description: req.body.description,
            priority: req.body.priority,
        })
        .then(function (error) {
            //siker
            req.flash('info', 'Feladat sikeresen módosítva!');
            res.redirect('/todos/list');
        })
        .catch(function (err) {
            //hiba
            console.log(err)
        });
    }
});


//Feladat törlése
router.get('/remove/:name', function(req, res) {
    var name = req.params.name;
    
    req.app.models.todo.destroy({name: name}, function(){
        req.app.models.todo.find().then(function (todos) {
            res.render('todos/list', {
                todos: decorateTodos(todos),
                messages: req.flash('info')
                });
            });
    });
});



module.exports = router;

