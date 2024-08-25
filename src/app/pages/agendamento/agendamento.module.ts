import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AgendamentoSessaoComponent } from "./components/agendamentoSessao/agendamentoSessao.component";
import { RecuperarCodigoComponent } from "./components/recuperarCodigo/recuperarCodigo.component";
import { AgendamentoAvaliacaoComponent } from "./components/agendamentoAvaliacao/agendamentoAvaliacao.component";
import { SociaisFooterModule } from "../shared/components/sociaisFooter/sociaisFooter.module";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

// routing
const routes: Routes = [
  {
    path: 'agendamentoSessao',
    component: AgendamentoSessaoComponent,
  },
  {
    path: 'agendamentoAvaliacao',
    component: AgendamentoAvaliacaoComponent,
  },
  {
    path: 'recuperarCodigo',
    component: RecuperarCodigoComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [LoginComponent, AgendamentoSessaoComponent, AgendamentoAvaliacaoComponent, RecuperarCodigoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SociaisFooterModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe,
    NgxDatatableModule
  ],
  providers: [],
})

export class AgendamentoModule{}
