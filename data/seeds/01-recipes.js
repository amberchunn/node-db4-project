exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
        {id: 1, name: 'Super Grilled Cheese', description: 'A pumped up twist on a classic.', author: 'Mom'},
      ]);
};
