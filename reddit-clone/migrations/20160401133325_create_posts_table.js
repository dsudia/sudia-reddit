
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.string('title');
    table.dateTime('date');
    table.text('description');
    table.string('image');
    table.string('author');
    table.integer('upvote');
    table.json('comments');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
