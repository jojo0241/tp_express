var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/Category', function(req, res, next) {
  res.render('Category', { title: 'Categorie' });
});

router.get('/:details', function(req, res, next) {
    res.render('Category', { CategoryDetail : res.details.params,  title: 'Categorie' });
  });