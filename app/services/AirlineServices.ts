import Airline from "#models/airline";

export default class AirlineServices{
    async read(){
        return await Airline.all()
    }
}