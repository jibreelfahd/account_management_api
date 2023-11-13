const userAuth = (req, res, next) => {
   if(!req?.query.name === 'Fahd' && req?.query.password === 'test1234'){
      req.status(401).json({ sucess: false, message: 'You are not authorized to access this route' });
      next();
   }  
}

module.exports = userAuth;