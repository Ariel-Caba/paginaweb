import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SdataBaseService {
  ListNombreCopleto:String[] = [];
  ListNombreUsuario:String[] = [];
  ListContraseña:String[] = [];
  ListEmail:String[] = [];
  LinkLogin:String = '/index';
  public LlenarList(nombre:String,usuario:String,contraa:String,email:String) {
    this.ListNombreCopleto.push(nombre);
    this.ListNombreUsuario.push(usuario);
    this.ListContraseña.push(contraa);
    this.ListEmail.push(email);
  }

  ActualN:String ="";
  ActualU:String="";
  ActualE:String="";
  AnameEnca:String = "Acerca de mi";

  public IngresarA(anombre:String,ausuario:String,aemail:String){
    this.ActualN = anombre;
    this.ActualU = ausuario;
    this.ActualE = aemail;
    this.AnameEnca = "Hola "+ anombre;

  }
  public SalirA(){
    this.ActualN = "";
    this.ActualU = "";
    this.ActualE = "";
    this.AnameEnca = "Acerca de mi";
    this.LinkLogin ='/index';
  }



  constructor() { }
}
