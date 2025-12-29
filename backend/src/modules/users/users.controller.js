const service = require('./users.service');

function list(req, res) {
  res.json(service.list());
}

function create(req, res) {
  const user = service.create(req.body);
  res.status(201).json(user);
}

module.exports = { list, create };
