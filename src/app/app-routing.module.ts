import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './etudiants/add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from './etudiants/list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from './etudiants/update-etudiant/update-etudiant.component';

const routes: Routes = [
  { path: 'add-etudiant', component: AddEtudiantComponent },
  { path: 'list-etudiant', component: ListEtudiantComponent },
  { path: 'update-etudiant/:id', component: UpdateEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
