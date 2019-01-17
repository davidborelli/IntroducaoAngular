import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  nome = 'David';
  adicionado = false;

  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar() {
    this.adicionado = true;

    const funcionario = {
      id: Math.round(Math.random() * 100),
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }
}
