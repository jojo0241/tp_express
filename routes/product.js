var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Produit' });
});

router.get('/:id', function(req, res, next) {
    res.render('product', { id : res.id.params , title: 'Produit' });
  });