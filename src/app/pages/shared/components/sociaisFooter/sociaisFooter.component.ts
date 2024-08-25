import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sociaisFooter',
  templateUrl: './sociaisFooter.component.html',
  styleUrls: ['./sociaisFooter.component.scss']
})
export class SociaisFooterComponent implements OnInit {

  @Input() habilitarInstagram: boolean = false;
  @Input() habilitarFacebook: boolean = false;
  @Input() habilitarWhatsapp: boolean = false;
  @Input() texto: string = 'Redes sociais';

  constructor() { }

  ngOnInit() {
  }

}
