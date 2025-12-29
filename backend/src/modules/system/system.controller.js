const service = require('./system.service');

function health(req, res) {
  res.json(service.health());
}

module.exports = { health };
