import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login'
	},
	{
		path: 'agendamentoSessao',
		loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoModule)
	},
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule
	]
})
export class PagesModule { }
