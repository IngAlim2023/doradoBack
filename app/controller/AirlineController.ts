import AirlineServices from "#services/AirlineServices";
import type { HttpContext } from "@adonisjs/core/http";

const air = new AirlineServices()

export default class AirlineController{
    async readAir({response}: HttpContext){
        try{
            const airline = await air.read()

            return response.status(200).json({message:"Exito", data:airline})
        }catch(e){
            return response.status(500).json({message:"Error", error:e.message})
        }
    }
}