const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authConfig = require('../../config/auth.config');

// TEMP in-memory user store (replace with DB later)
const users = [
  {
    id: 1,
    username: 'admin',
    passwordHash: bcrypt.hashSync('admin123', 10),
    role: 'admin'
  }
];

function login({ username, password }) {
  if (!username || !password) {
    const err = new Error('Username and password required');
    err.status = 400;
    throw err;
  }

  const user = users.find(u => u.username === username);
  if (!user) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  const valid = bcrypt.compareSync(password, user.passwordHash);
  if (!valid) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  const token = jwt.sign(
    {
      sub: user.id,
      role: user.role
    },
    authConfig.jwtSecret,
    { expiresIn: authConfig.jwtExpiresIn }
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role
    }
  };
}

module.exports = { login };
