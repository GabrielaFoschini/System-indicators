'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndicatorsSchema extends Schema {
  up () {
    this.create('indicators', (table) => {
      table.increments()
      table.string('title', 64).notNullable()
      table.string('description', 128).notNullable()
      table.decimal('numbers')
      table.timestamps()
    })
  }

  down () {
    this.drop('indicators')
  }
}

module.exports = IndicatorsSchema
