import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AgendamentoSessaoComponent } from "./components/agendamentoSessao/agendamentoSessao.component";

// routing
const routes: Routes = [
  {
    path: 'agendamentoSessao',
    component: AgendamentoSessaoComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [LoginComponent, AgendamentoSessaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})

export class AgendamentoModule{}
