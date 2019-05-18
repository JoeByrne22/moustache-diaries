const router = require('express').Router();
const moustacheController = require('../controllers/moustacheController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const jwt = require('jsonwebtoken');

function secureRoute(req, res, next) {
  if (!req.headers.authorization)
    res.status(401).json({ message: 'unauthorised'});
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, 'black power', function(err) {
    if (err) {
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}


router.get('/moustaches', moustacheController.indexRoute);

router.get('/moustaches/:id', moustacheController.showRoute);

router.post('/moustaches', secureRoute, moustacheController.createRoute);

router.put('/moustaches/:id', secureRoute, moustacheController.updateRoute);

router.delete('/moustaches/:id', secureRoute, moustacheController.deleteRoute);

router.post('/register', authController.registerRoute);

router.post('/login', authController.loginRoute);

router.get('/users/:id', userController.show);

router.post('/moustaches/:moustacheId/comments', secureRoute, commentController.createRoute);

router.delete('/moustaches/:moustacheId/comments/:commentId', secureRoute, commentController.deleteRoute);



module.exports = router;
