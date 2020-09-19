
import { Component, OnInit } from '@angular/core';
import { SdataBaseService } from '../sdata-base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    AdverNC:String="";
    AdverNU:String="";
    AdverP1:String="";
    AdverP2:String="";
    AdverCo:String="";

    nomC:String="";
    nomU:String="";
    password1:String="";
    password2:String="";
    email:String="";

  claveNC:Boolean = true;
  claveNU:Boolean = true;
  claveP1:Boolean = true;
  claveP2:Boolean = true;
  claveCo:Boolean = true;

constructor(public database:SdataBaseService) { }
ngOnInit(): void {  }

registerUser(){
  if(this.nomC==""){
   this.AdverNC = "Este campo es obligatorio";
   this.claveNC = false;
 }
 if(this.nomU==""){
    this.AdverNU = "Este campo es obligatorio";
    this.claveNU = false;
  }
  if(this.password1 != this.password2){
   this.AdverP1 = "Las contraseñas no son iguales";
   this.AdverP2 = "Las contraseñas no son iguales";
   this.claveP1 = false;
   this.claveP2 = false;
  }
 if(this.password1==""){
    this.AdverP1 = "Este campo es obligatorio";
    this.claveP1 = false;
  }
  if(this.password2==""){
   this.AdverP2 = "Este campo es obligatorio";
   this.claveP2 = false;
 }
 if(this.email==""){
    this.AdverCo ="Este campo es obligatorio";
    this.claveCo = false;
  }

if( (this.claveNC !=false) && this.claveNU!=false &&this.claveP1!=false&&this.claveP2!=false&&this.claveCo!=false){
  this.database.LlenarList(this.nomC,this.nomU,this.password1,this.email);

  this.AdverNC="";  this.AdverNU="";  this.AdverP1="";  this.AdverP2="";  this.AdverCo="";

  this.nomC=""; this.nomU=""; this.password1=""; this.password2=""; this.email="";

  this.claveNC = true; this.claveNU = true; this.claveP1 = true; this.claveP2 = true; this.claveCo = true;

  Swal.fire({title: 'Registrado!',text: 'Deseas Continuar?',icon: 'success',confirmButtonText: 'Ok'})
}else{
  

  this.claveNC = true; this.claveNU = true; this.claveP1 = true; this.claveP2 = true; this.claveCo = true;
}


}

}
