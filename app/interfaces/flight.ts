import { DateTime } from "luxon";

export interface DataFlight{
    id?:string;
    salaabordaje:string;
    horasalida:DateTime;
    horallegada:DateTime;
    coddestino:number;
    codaerolinea:number;
}

export interface EditFlight{
    horasalida:DateTime;
    horallegada:DateTime;
    coddestino:number;
}