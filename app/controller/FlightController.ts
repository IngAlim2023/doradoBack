import FlightServices from "#services/FlightServices";
import type { HttpContext } from "@adonisjs/core/http";
import { nanoid } from "nanoid";


const flight = new FlightServices();


export default class FlightController{
    async createFlight({request, response}:HttpContext){
        try{
            const id = nanoid(6);

            const {salaabordaje, horasalida, horallegada, coddestino,codaerolinea} = request.body()

            const newFlight = await flight.create({id, salaabordaje, horasalida, horallegada, coddestino,codaerolinea})

            return response.status(200).json({message:"Exito", data:newFlight})
        }catch(e){
            return response.status(500).json({message:"Error", error:e.message})
        }
    }
    async readFlight({response}:HttpContext){
        try{
            const Flights = await flight.read()

            return response.status(200).json({message:"Exito", data:Flights})
        }catch(e){
            return response.status(500).json({message:"Error", error:e.message})
        }
    }
}