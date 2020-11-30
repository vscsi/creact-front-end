
exports.up = function(knex) {
  return knex.schema.createTable('user', (table)=>{
      table.increments('id').primary();
      table.text('user_name').notNullable();
      table.text('user_pw').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
