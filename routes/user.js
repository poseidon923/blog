

exports.list = (req,res, next)=>{
	res.send('respond with a resource');
}

exports.login = (req,res, next)=>{
	res.render('login')
}

exports.logout = (req,res,next)=>{
	req.session.destroy();
	res.redirect('/');
}
