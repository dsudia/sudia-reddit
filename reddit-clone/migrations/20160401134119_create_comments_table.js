exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments();
    table.string('author');
    table.string('text');
    table.integer('post_id').references('posts.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
