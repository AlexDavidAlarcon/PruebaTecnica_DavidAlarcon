
import { Injectable } from '@angular/core';
import { Persona } from './modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  verificarResidente(cedula: string, clave: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // Petición al servidor para comparar con datos del sistema
      this.personas.forEach((persona) => {
        if (persona.cedula === cedula && persona.clave === clave) resolve(true);
      })
      reject("No se ha encontrado al usuario");
    })
  }

  registrarResidente(residente: Persona): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // Petición al servidor para registrar al residente en el sistema en caso de que no se encuentre en el sistema


    })
  }

  personas: Persona[] = [
    {
      nombre: "Carlos",
      apellido: "González",
      cedula: "0912345678",
      placaVehiculo: "ABC1234",
      clave: "clave123",
      correo: "carlos.gonzalez@example.com"
    },
    {
      nombre: "María",
      apellido: "Pérez",
      cedula: "0987654321",
      placaVehiculo: "DEF5678",
      clave: "clave456",
      correo: "maria.perez@example.com"
    },
    {
      nombre: "Juan",
      apellido: "Martínez",
      cedula: "0923456789",
      placaVehiculo: "GHI9012",
      clave: "clave789",
      correo: "juan.martinez@example.com"
    },
    {
      nombre: "Luisa",
      apellido: "Fernández",
      cedula: "0976543210",
      placaVehiculo: "JKL3456",
      clave: "clave012",
      correo: "luisa.fernandez@example.com"
    },
    {
      nombre: "Roberto",
      apellido: "Jiménez",
      cedula: "0934567890",
      placaVehiculo: "MNO6789",
      clave: "clave345",
      correo: "roberto.jimenez@example.com"
    }
  ]  

}
