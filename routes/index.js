
/*
 * GET home page.
 */

var model = require('../PrimeFactors');

exports.index = function(req, res){
  res.render('index', { title: 'Prime Factors' });
};

exports.factors = function(req, res){
	res.json(model.PrimeFactors(req.query.number));
};