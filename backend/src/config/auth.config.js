module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'change-this-secret',
  jwtExpiresIn: '1h'
};
