const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(student) {
  return db('students').insert(student, 'id');
}

async function update(id, changes) {
  return db('students')
  .where('id', id)
  .update(changes)
}

function remove(id) {
  return db('students')
  .where('id', id)
  .del();
}

function getAll() {
  return db('students');
}

function findById(id) {
  return db('students')
  .where({ id: Number(id) });
}