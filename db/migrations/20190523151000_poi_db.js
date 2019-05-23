
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('pois', (table)=>{
      table.increments('id');
      table.float('lat', 10, 6).notNullable();
      table.float('lng', 10, 6).notNullable();
      table.string('title').notNullable();
      table.string('desc').notNullable();
      table.string('imgurl').notNullable();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('pois')
  ])
};
