import { Component, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Persona } from '../modelos/persona';
import { AuthService } from '../auth.service';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-residentes',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './registro-residentes.component.html',
  styleUrl: './registro-residentes.component.scss'
})
export class RegistroResidentesComponent {
  protected personaForm: {
    nombre: FormControl,
    apellido: FormControl,
    placaVehiculo: FormControl,
    cedula: FormControl,
    clave: FormControl,
    correo: FormControl
  } = {
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    placaVehiculo: new FormControl('', [Validators.required, Validators.pattern("[A-Z]{3}[0-9]{4}")]),
    cedula: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
    clave: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email])
  };
  protected hide: boolean = true;
  private residente: Persona | undefined;

  constructor(auth: AuthService) {

  }

  getEmailErrorMessage() {
    if (this.personaForm.correo.hasError('required')) {
      return 'Debe ingresar un correo';
    }

    return this.personaForm.correo.hasError('email') ? 'Not a valid email' : '';
  }

  getRequiredErrorMessage() {
    return 'Debe llenar este campo';
  }

}
