import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('account', table => {

    table.increments('id').primary();
    table.string('account_number').notNullable();
    table.string('account_type').notNullable();
    table.double('balance').notNullable();
    table.double('limit').notNullable();
    table.float('fee').notNullable().defaultTo(0.3);
    
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('account');
}