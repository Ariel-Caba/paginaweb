import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';





import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { LoginComponent } from './login/login.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { RegistroComponent } from './registro/registro.component';
import { DatabaseComponent } from './database/database.component';


import { SdataBaseService } from './sdata-base.service';
import { InfoComponent } from './info/info.component';
import { RouteInicioComponent } from './route-inicio/route-inicio.component';
import { RoutePerfilComponent } from './route-perfil/route-perfil.component';
import { IniciooneComponent } from './inicioone/inicioone.component';
import { RouteRegistroComponent } from './route-registro/route-registro.component';

const route1: Routes = [  
  { path: 'registro', component:  RouteRegistroComponent },
  { path: 'perfil', component: RoutePerfilComponent },
  { path: 'index', component:  RouteInicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/index', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ImagenesComponent,
    CuerpoComponent,
    LoginComponent,
    PiepaginaComponent,
    RegistroComponent,
    DatabaseComponent,
    InfoComponent,
    RouteInicioComponent,
    RoutePerfilComponent,
    IniciooneComponent,
    RouteRegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route1)
  ],
  providers: [SdataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
