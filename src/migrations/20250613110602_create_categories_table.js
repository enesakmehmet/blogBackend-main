export async function up(knex) {
  await knex.schema.createTable("categories", (table) => {
    table.increments('id').primary(); // Otomatik primary key
    table.string('name').notNullable(); // kategori id
    table.timestamp('created_at').defaultTo(knex.fn.now()); // oluşturma zamanı
    table.timestamp('deleted_At').nullable();  //silme zamanı
  });
}

export async function down(knex) {
  await knex.schema.dropTable("categories"); // geri alma 
}

  
    
