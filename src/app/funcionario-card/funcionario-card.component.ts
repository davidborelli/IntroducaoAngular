import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
      text-align: center;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  // Método retorna um objeto
  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id / 10,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }

  /* getClassesCss() {
    return ['badge', 'badge-primary'];
  } */

}
