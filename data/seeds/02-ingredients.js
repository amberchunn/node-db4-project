
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
        {id: 1, name: 'White Bread', notes: ''},
        {id: 2, name: 'Sharp Cheddar Cheese', notes: ''},
        {id: 3, name: 'Butter', notes: ''},
        {id: 4, name: 'Baby Swiss Cheese', notes: ''},
      ]);
};
