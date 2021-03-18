
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('id');
            tbl.string('name')
                .unique()
                .notNullable();
            tbl.string('description')
                .notNullable();
            tbl.string('author');
        })
        .createTable('ingredients', tbl => {
            tbl.increments('id');
            tbl.string('name')
                .unique()
                .notNullable();
            tbl.string('notes')
        })
        .createTable('prep', tbl => {
            tbl.increments('id');
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
            tbl.float('amount')
                .notNullable();
            tbl.float('unit_of_measurement')
                .notNullable();
            tbl.string('description');
        })
        .createTable('instructions', tbl => {
            tbl.increments('id');
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
            tbl.string('step_description')
                .notNullable();
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
        })
}

exports.down = async function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('prep')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
}
