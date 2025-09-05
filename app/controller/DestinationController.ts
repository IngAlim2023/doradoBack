import DestinationServices from "#services/DestinationServices";
import type { HttpContext } from "@adonisjs/core/http";

const dest = new DestinationServices();

export default class DestinationController{
    async readDestination({response}:HttpContext){
        try{
            const destination = await dest.read()

            return response.status(200).json({message:"Exito", data:destination})
        }catch(e){
            return response.status(500).json({message:"Error", error:e.message})
        }
    }
}
