
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({author: , text: , post_id: }),
    knex('comments').insert({author: , text: , post_id: }),
    knex('comments').insert({author: , text: , post_id: })
  );
};
