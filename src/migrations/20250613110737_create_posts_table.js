export async function up(knex) {
  await knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string('title').notNullable();  //başlık
    table.text('content').notNullable(); // içerik
    table.integer('category_id').references('id').inTable('categories').onDelete('cascade');  // Kategori ile ilişkilendirme
    table.timestamp('created_id').defaultTo(knex.fn.now()); // Oluşturulma zamanı
    table.timestamp('published_at').nullable();    // Yayınlanma zamanı
    table.timestamp('deleted_at').nullable();  // delete 

    });


}

export async function down(knex) {
    await knex.schema.dropTable("posts");
}

    
    
   