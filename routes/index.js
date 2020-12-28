var article = require('./article');
var user = require('./user');


exports.index = function(req,res){
	res.render(admin);
}