import { Knex } from 'knex'

export async function seed(knex: Knex) {
  await knex('account').insert([
    { account_number: '102030', account_type: 'corrente', balance: 8000, limit: 600 },
    { account_number: '405060', account_type: 'poupança', balance: 20000, limit: 600 },
  ]);
}