import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Flight from './flight.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Passenger extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare nombres: string
  @column() declare apellidos: string
  @column() declare email: string
  @column() declare telefono: string
  @column() declare codvuelo: string
  @column() declare foto: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Flight, {
    foreignKey:'codvuelo'
  })
  declare flight: BelongsTo<typeof Flight>
}