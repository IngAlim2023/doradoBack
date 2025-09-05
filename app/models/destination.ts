import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Flight from './flight.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Destination extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare descripcion:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Flight)
  declare vuelos: HasMany<typeof Flight>
}