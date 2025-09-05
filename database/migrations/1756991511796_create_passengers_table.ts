import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'passengers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nombres', 191).notNullable()
      table.string('apellidos', 191).notNullable()
      table.string('email', 191).notNullable()
      table.string('telefono', 191).notNullable()
      table.string('codvuelo', 6).notNullable()
      table.string('foto', 191)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}