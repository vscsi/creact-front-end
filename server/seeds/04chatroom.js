
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chatroom').del()
    .then(function () {
      // Inserts seed entries
      return knex('chatroom').insert([
        {id: 1, chatroom_type: true}
      ]);
    });
};
