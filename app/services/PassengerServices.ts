import Passenger from "#models/passenger";
import { DataPassenger } from "../interfaces/passenger.js";


export default class PassengerServices{
    async create(data:DataPassenger){
        return await Passenger.create(data)
    }
    async read(){
        return await Passenger.all()
    }
    async readByFlight(codvuelo:string){
        return await Passenger.query().where('codvuelo',codvuelo)
    }
    async delete(id:number){
        const passenger = await Passenger.findOrFail(id)
        return passenger.delete()
    }
}