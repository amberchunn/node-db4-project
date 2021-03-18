
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
        {id: 1, recipe_id: '1', step_description: 'Heat non-stick pan to medium', step_number: '1'},
        {id: 2, recipe_id: '1', step_description: 'Add butter to pan and coat entire surface', step_number: '2'},
        {id: 3, recipe_id: '1', step_description: 'Add 1 slice of bread and all slices of cheese', step_number: '3'},
        {id: 4, recipe_id: '1', step_description: 'Heat until cheese is melted. About 4 minutes', step_number: '4'},
        {id: 5, recipe_id: '1', step_description: 'Add second slice of bread. Flip sandwich. Heat for 1 minute. Serve right away. Enjoy!', step_number: '5'},
      ]);
};
