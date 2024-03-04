import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { DatosProfesoresComponent } from './profesores/datos-profesores/datos-profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    AlumnosComponent,
    InformacionComponent,
    DatosProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
