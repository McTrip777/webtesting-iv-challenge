const db = require('../data/dbConfig.js');

module.exports = {
  add,
  remove,
};

async function add(user) {
  const [id] = await db('users').insert(user);
  return db('users')
    .where({ id })
    .first();
};

function remove(id) {
  return null;
}
