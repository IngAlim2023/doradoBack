import { DateTime } from "luxon";

export interface DataPassenger{
    id?: number;
    nombres: string;
    apellidos: string;
    email: string;
    telefono: string;
    codvuelo: string;
    foto?: string | null;
    createdAt?: DateTime<boolean>;
    updatedAt?: DateTime<boolean>;
}