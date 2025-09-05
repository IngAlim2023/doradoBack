import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Destination from './destination.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Airline from './airline.js'
import Passenger from './passenger.js'

export default class Flight extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column() declare salaabordaje: string
  @column() declare horasalida: DateTime
  @column() declare horallegada: DateTime

  @column() declare coddestino: number
  @column() declare codaerolinea: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Destination,{
    foreignKey:'coddestino'
  })
  declare destination: BelongsTo<typeof Destination>

  @belongsTo(()=> Airline,{
    foreignKey:'codaerolinea'
  })
  declare airline: BelongsTo<typeof Airline>

  @hasMany(()=> Passenger)
  declare passenger: HasMany<typeof Passenger>

}