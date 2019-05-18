const Moustache = require('../models/moustache');

function createRoute(req, res, next) {
  console.log('this is req.body heyyy', req.body);
  Moustache.findById(req.params.moustacheId)
    .then(moustache => {
      req.body.user = req.tokenUserId;
      moustache.comments.push(req.body);
      return moustache.save();
    })
    .then(moustache => Moustache.populate(moustache, 'createdBy comments.user'))
    .then(moustache => res.json(moustache))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Moustache.findById(req.params.moustacheId)
    .then(moustache => {
      const comment = moustache.comments.id(req.params.commentId);
      comment.remove();
      return moustache.save();
    })
    .then(moustache => moustache.populate(moustache, 'comments.user'))
    .then(moustache => res.json(moustache))
    .catch(next);
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
