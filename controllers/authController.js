const User = require('../models/user');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');

function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user && user.validatePassword(req.body.password)) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id
        }, env.secret, { expiresIn: '24h' });
        res.json({
          message: `Welcome back Lord ${user.username}`,
          token: token
        });
      } else {
        res.json({
          message: 'Not this time, you bloody fool!'
        });
      }
    })
    .catch(next);
}

function registerRoute(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
    .catch(next);
}

module.exports = {
  loginRoute: loginRoute,
  registerRoute: registerRoute
};
