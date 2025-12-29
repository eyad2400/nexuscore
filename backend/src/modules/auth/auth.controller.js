const service = require('./auth.service');

function login(req, res, next) {
  try {
    const result = service.login(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { login };
