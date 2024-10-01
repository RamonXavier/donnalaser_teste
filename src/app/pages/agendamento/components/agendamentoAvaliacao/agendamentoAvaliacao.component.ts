import { Component, inject, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';

interface Country {
	name: string;
	population: string;
  dia: string
}

const COUNTRIES: Country[] = [
  {
      name: 'Segunda-Feira',
      population: '08:45',
      dia: '01/04/2024',
  },
  {
      name: 'Terça-Feira',
      population: '09:15',
      dia: '16/01/2024',
  },
  {
      name: 'Quarta-Feira',
      population: '10:00',
      dia: '07/02/2024',
  },
  {
      name: 'Quinta-Feira',
      population: '11:30',
      dia: '22/08/2024',
  },
  {
      name: 'Sexta-Feira',
      population: '12:00',
      dia: '12/07/2024',
  },
  {
      name: 'Sábado',
      population: '13:15',
      dia: '03/02/2024',
  },
  {
      name: 'Domingo',
      population: '14:45',
      dia: '18/02/2024',
  },
  {
      name: 'Segunda-Feira',
      population: '15:00',
      dia: '29/04/2024',
  },
  {
      name: 'Terça-Feira',
      population: '16:30',
      dia: '20/02/2024',
  },
  {
      name: 'Quarta-Feira',
      population: '17:15',
      dia: '15/05/2024',
  },
  {
      name: 'Quinta-Feira',
      population: '18:00',
      dia: '01/08/2024',
  },
  {
      name: 'Sexta-Feira',
      population: '19:30',
      dia: '30/08/2024',
  },
  {
      name: 'Sábado',
      population: '20:45',
      dia: '14/09/2024',
  },
  {
      name: 'Domingo',
      population: '21:00',
      dia: '10/03/2024',
  },
  {
      name: 'Segunda-Feira',
      population: '22:15',
      dia: '05/08/2024',
  },
];


@Component({
  selector: 'app-agendamentoAvaliacao',
  templateUrl: './agendamentoAvaliacao.component.html',
  styleUrls: ['./agendamentoAvaliacao.component.scss']
})
export class AgendamentoAvaliacaoComponent implements OnInit {

	today = inject(NgbCalendar).getToday();
	displayMonths = 2;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'visible';
	public model: NgbDateStruct;
	public date: { year: number; month: number };

  public exemplos = COUNTRIES;
  public columnMode = ColumnMode;

  constructor() {
    const today = new Date();
    this.model = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.date = {
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
  }

  ngOnInit() {
  }

}
