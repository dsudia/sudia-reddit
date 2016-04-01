
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({comm_author: 'Mike', text: 'Great photo!', post_id: knex('posts').select('id').where('posts.author', 'Dave')}),
    knex('comments').insert({comm_author: 'Bill Smith', text: 'Wow, what a great photo! I\'m really impressed with your skills!', post_id: knex('posts').select('id').where('posts.author', 'Dave')}),
    knex('comments').insert({comm_author: 'Anonymous', text: 'Really? Black and white? How passé...', post_id: knex('posts').select('id').where('posts.author', 'Ansel')})
  );
};
