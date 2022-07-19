exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.varchar('vin', 40).notNullable().unique();
    tbl.varchar('make', 40).notNullable();
    tbl.varchar('model', 40).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.varchar('title');
    tbl.varchar('transmission');
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};
