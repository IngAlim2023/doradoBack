import Destination from "#models/destination";

export default class DestinationServices{
    async read(){
        return await Destination.all()
    }
}