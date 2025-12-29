const service = require('./system.service');

function health(req, res) {
  const status = service.health();
  res.json(status);
}

module.exports = {
  health
};
