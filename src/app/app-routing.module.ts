import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DesignsCreationsComponent} from './designs-creations/designs-creations.component';
import {ProfessionalCompetencesComponent} from './professional-competences/professional-competences.component';

const routes: Routes = [
  {path: 'DesignsCreations', component: DesignsCreationsComponent},
  {path: 'ProfessionalCompetences', component: ProfessionalCompetencesComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
