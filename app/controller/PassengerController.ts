import PassengerServices from "#services/PassengerServices";
import type { HttpContext } from "@adonisjs/core/http";


const passe = new PassengerServices();

export default class PassengerController{
    async createPassenger({request, response}:HttpContext){
        try{
            const {nombres, apellidos, email, telefono,codvuelo} = request.body()

            const paseenger = await passe.create({nombres, apellidos, email, telefono,codvuelo})
            return response.status(201).json({message:"Exito", data:paseenger})
        }catch(e){
            return response.status(500).json({message:"Error", error:e.message})
        }
    }
    async readPassengers({ response}:HttpContext){
        try{

            const paseenger = await passe.read()
            return response.status(201).json({message:"Exito", data:paseenger})
        }catch(e){
            return response.status(500).json({message:"Error", error:e.message})
        }
    }
}