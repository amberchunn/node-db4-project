
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prep').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, amount: 2, unit_of_measurement: 'Slices', description: 'Soft, Fresh'},
        {id: 2, recipe_id: 1, ingredient_id: 2, amount: 2, unit_of_measurement: 'Slices', description: 'High Quality, Tillimuk or similar'},
        {id: 3, recipe_id: 1, ingredient_id: 3, amount: 1, unit_of_measurement: 'Tbl', description: 'Preferably Irish'},
        {id: 4, recipe_id: 1, ingredient_id: 4, amount: 2, unit_of_measurement: 'Slices', description: 'High Quality, Tillimuk or similar'},

      ]);
};
