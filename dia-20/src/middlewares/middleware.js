exports.middlewareGlobal = (req, res, next) =>{
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('succsess');
  res.locals.user = req.session.user;

  next();
}
