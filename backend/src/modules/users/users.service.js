const users = [];

function list() {
  return users;
}

function create(data) {
  const user = {
    id: users.length + 1,
    username: data.username,
    role: data.role || 'user'
  };

  users.push(user);
  return user;
}

module.exports = { list, create };
