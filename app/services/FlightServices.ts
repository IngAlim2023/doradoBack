import Flight from "#models/flight";
import { DataFlight } from "../interfaces/flight.js";


export default class FlightServices{
    async create(data:DataFlight){
        return await Flight.create(data)
    }
    async read(){
        return await Flight.all()
    }
    async info(){
        return Flight.query().preload('destination',(query)=>{
            query.select('descripcion')
        }).preload('airline',(query)=>{
            query.select('descripcion')
        })
    }
}