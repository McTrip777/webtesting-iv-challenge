const db = require('../data/dbConfig.js');

module.exports = {
  add,
  remove,
  get,
};

async function add(user) {
  const [id] = await db('users').insert(user);
  return db('users')
    .where({ id })
    .first();
};

function remove(id) {
  return db('users')
  .where({ id })
  .del();
}

function get() {
    return db('users');
  }
