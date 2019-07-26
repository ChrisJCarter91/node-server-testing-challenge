    
exports.up = function(knex) {
    return knex.schema.createTable('students', tbl => {
      tbl.increments();
  
      tbl.string('name', 128).notNullable();
  
      tbl.string('age', 3).notNullable();
  
      tbl.string('email', 123).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
  };