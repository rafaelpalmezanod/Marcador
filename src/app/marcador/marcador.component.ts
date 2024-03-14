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
  equipoLocal: string = 'Equipo L';
  equipoVisitante: string = 'Equipo V';
  tiempoSeleccionado: number = 1;

  onTiempoCambiado(tiempo: number): void {
    this.tiempoSeleccionado = tiempo;
  }

  onNombresEquiposCambiados(nombres: { equipoLocal: string, equipoVisitante: string }): void {
    this.equipoLocal = nombres.equipoLocal;
    this.equipoVisitante = nombres.equipoVisitante;
  }

}
