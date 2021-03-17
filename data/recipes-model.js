const db = require('./db');

function getRecipes () {
    return db('recipes as r')
        .select('r.name', 'r.description', 'r.author')
}
function getShoppingList (recipe_id) {
    return db('ingredients as i')
        .select('i.name', 'p.amount', 'p.unit')
        .join('prep as p', 'i.id', 'p.ingredient_id')
        .join('recipes as r', 'p.recipe_id', 'r.id')
        .where('r.id', recipe_id)
        .orderBy('i.name', 'asc')
}
function getInstructions (recipe_id) {
    return db('instructions as i')
        .select('i.step_number', 'i.step_description')
        .join('recipes as r', 'i.recipe_id', 'r.id')
        .where('r.id', recipe_id)
        .orderBy('i.step_number', 'asc')
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
