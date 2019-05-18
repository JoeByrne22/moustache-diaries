const Moustache = require('../models/moustache');

const indexRoute = (req, res) => {
  Moustache
    .find()
    .then(moustache => {
      res.json(moustache);
    });
};

const showRoute = (req, res) => {
  Moustache
    .findById(req.params.id)
    .populate('createdBy comments.user')
    .then(moustache => {
      res.json(moustache);
    });
};

function createRoute(req, res, next) {
  Moustache.create(req.body)
    .then(moustache => res.json(moustache))
    .catch(next);
}

function updateRoute(req, res, next) {
  Moustache.findById(req.params.id)
    .then(moustache => moustache.set(req.body))
    .then(moustache => moustache.save())
    .then(moustache => res.json(moustache))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Moustache.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}


module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  createRoute: createRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
