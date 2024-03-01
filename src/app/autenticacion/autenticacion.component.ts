import { Component, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Persona } from '../modelos/persona';
import { AuthService } from '../auth.service';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.scss'
})
export class AutenticacionComponent {
  protected personaForm: {
    cedula: FormControl,
    clave: FormControl
  } = {
    cedula: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
    clave: new FormControl('', [Validators.required])
  };
  protected hide: boolean = true;
  private residente: Persona | undefined;

  constructor(auth: AuthService) {

  }

  getRequiredErrorMessage() {
    return 'Debe llenar este campo';
  }

}
