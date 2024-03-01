import { Persona } from "./persona";

export interface Visitante extends Persona {
    motivoVisita: string;
    contacto: string;
}
