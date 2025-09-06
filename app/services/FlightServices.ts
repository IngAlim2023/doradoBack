import Flight from "#models/flight";
import { DataFlight, EditFlight } from "../interfaces/flight.js";


export default class FlightServices{
    async create(data:DataFlight){
        return await Flight.create(data)
    }
    async read(){
        return await Flight.all()
    }
    async update(id:string, data:EditFlight){
        const flight = await Flight.findOrFail(id);
        flight.merge(data)
        await flight.save()
        return flight
    }
    async info(){
        return Flight.query().preload('destination',(query)=>{
            query.select('descripcion')
        }).preload('airline',(query)=>{
            query.select('descripcion')
        })
    }
}