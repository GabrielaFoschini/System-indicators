'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndicatorsMembersSchema extends Schema {
  up () {
    this.create('indicators_members', (table) => {
      table.increments()
      table.integer('indicators_id').unsigned().references('id').inTable('indicators')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('indicators_members')
  }
}

module.exports = IndicatorsMembersSchema
