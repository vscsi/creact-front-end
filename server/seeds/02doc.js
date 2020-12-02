
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('document').del()
    .then(function () {
      // Inserts seed entries
      return knex('document').insert([
        {id: 1, document_name: 'First document', document_content: 'Some dummy Text'},
      ]);
    });
};
