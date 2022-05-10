<<<<<<< HEAD
const withAuth = (req, res, next) => {
  !req.session.loggedIn ? res.redirect('/login') : next();
};

module.exports = withAuth;
=======
const withAuth = (req, res, next) => {
  !req.session.loggedIn ? res.redirect('/login') : next();
};

module.exports = withAuth;
>>>>>>> d66d50f4c641b6502a29791bab57b9af7eef2127
