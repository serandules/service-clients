var validators = require('validators');
var Clients = require('model-clients');

exports.create = function (req, res, next) {
  validators.create({
    content: 'json',
    model: Clients
  }, req, res, next);
};

exports.update = function (req, res, next) {
  validators.update({
    id: req.params.id,
    content: 'json',
    model: Clients
  }, req, res, next);
};

exports.find = function (req, res, next) {
  validators.query(req, res, function (err) {
    if (err) {
      return next(err);
    }
    validators.find({
      model: Clients
    }, req, res, next);
  });
};

exports.findOne = function (req, res, next) {
  validators.findOne({
    id: req.params.id,
    model: Clients
  }, req, res, next);
};