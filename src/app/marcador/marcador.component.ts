import { Component } from '@angular/core';
import { EquipoComponent } from './../equipo/equipo.component'

@Component({
  selector: 'app-marcador',
  standalone: true,
  imports: [EquipoComponent],
  templateUrl: './marcador.component.html',
  styleUrl: './marcador.component.css'
})
export class MarcadorComponent {
  

}
