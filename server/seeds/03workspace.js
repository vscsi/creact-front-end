
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workspace').del()
    .then(function () {
      // Inserts seed entries
      return knex('workspace').insert([
        {id: 1, workspace_name: 'First dummy Workspace'}
      ]);
    });
};
