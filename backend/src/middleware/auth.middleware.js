const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

function authMiddleware(req, res, next) {
  const header = req.header('Authorization');

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid Authorization header' });
  }

  const token = header.replace('Bearer ', '');

  try {
    const payload = jwt.verify(token, authConfig.jwtSecret);

    req.user = {
      id: payload.sub,
      role: payload.role
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = authMiddleware;
