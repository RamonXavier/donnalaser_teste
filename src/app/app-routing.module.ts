import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

const appRoutes: Routes = [
	{
		path: '**',
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
	},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
