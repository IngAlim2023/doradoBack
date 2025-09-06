import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'flights'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 6).notNullable().primary()
      table.string('salaabordaje', 30).notNullable()
      table.time('horasalida').notNullable()
      table.time('horallegada').notNullable()

      table.integer('coddestino').notNullable()
      table.integer('codaerolinea').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}