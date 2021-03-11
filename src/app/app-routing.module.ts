import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard', pathMatch : 'full'},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'alunos', component : AlunosComponent},
  { path : 'perfil', component :PerfilComponent},
  { path: 'professores', component : ProfessoresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
