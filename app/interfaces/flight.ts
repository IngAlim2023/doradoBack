import { DateTime } from "luxon";

export interface DataFlight{
    id?:string;
    salaabordaje:string;
    horasalida:DateTime;
    horallegada:DateTime;
    coddestino:number;
    codaerolinea:number;
}