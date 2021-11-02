import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalCompetencesComponent } from './professional-competences/professional-competences.component';
import { DesignsCreationsComponent } from './designs-creations/designs-creations.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalCompetencesComponent,
    DesignsCreationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
