exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function(table) {
    table.increments('id');
    table.string('title').notNullable();
    table.float('lattitude').notNullable();
    table.float('longitude').notNullable();
    // table.foreign('poi_id').references('id').inTable('pois');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps')

};
