export async function up(knex) {
  await knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.integer('category_id').references('id').inTable('categories').onDelete('cascade');
    table.timestamp('created_id').defaultTo(knex.fn.now());
    table.timestamp('published_at').nullable();
    table.timestamp('deleted_at').nullable();

    });


}

export async function down(knex) {
    await knex.schema.dropTable("posts");
}

    
    
   