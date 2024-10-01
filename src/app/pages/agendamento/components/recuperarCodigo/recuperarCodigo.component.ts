import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperarCodigo',
  templateUrl: './recuperarCodigo.component.html',
  styleUrls: ['./recuperarCodigo.component.scss']
})
export class RecuperarCodigoComponent implements OnInit {


  public carregandoSolicitacao: boolean = false;
  public solicitacaoEnviada: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public enviarSolicitacao():void {
    this.carregandoSolicitacao = true;
    setTimeout(() => {
      this.carregandoSolicitacao = false;
      this.solicitacaoEnviada = true;
    }, 3000);
  }

}
