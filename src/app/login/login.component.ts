import { ActivatedRoute,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SdataBaseService } from '../sdata-base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User_name:String;
  password:String;
  vacio:String;
  VarPoss:number = 0;
  VarFind:Boolean = false;
  AdverNC:String ="";
  AdverP1:String ="";


  constructor(public database:SdataBaseService, private router: Router ){
    this.VarPoss = 0;
    this.VarFind = false;
  }


  IngresoUser(){
    if (this.User_name=="") {
      this.AdverNC = "Este campo es obligatorio";
    }
    if (this.password=="") {
      this.AdverP1 = "Este campo es obligatorio";
    }

if(this.User_name !=""&&this.password!=""){
    while (this.VarPoss < this.database.ListNombreCopleto.length && this.VarFind==false) {
      if (this.User_name == this.database.ListNombreUsuario[this.VarPoss] &&
        this.password == this.database.ListContraseña[this.VarPoss]){
          this.VarFind = true;
        }
        else
        {
        this.VarPoss = this.VarPoss + 1;
        }
        console.log( this.VarPoss);
    }

    if (this.VarFind == true){
      this.database.IngresarA(this.database.ListNombreCopleto[this.VarPoss],
      this.database.ListNombreUsuario[this.VarPoss],
      this.database.ListEmail[this.VarPoss]);
      this.database.LinkLogin = "/perfil";

      Swal.fire({title: 'Bienvenido!',text: '',icon: 'success',confirmButtonText: 'Ok'});
      this.router.navigate(['/perfil']);
    }
    else{
        Swal.fire({title: 'Error!',text: 'El usuario y la contraseña son incorrectos',icon: 'error',confirmButtonText: 'Ok'});
    }
    this.User_name = this.vacio;
    this.password = this.vacio;
    this.VarPoss = 0;
    this.VarFind = false;
    }

  }



  ngOnInit(): void {
  }

}
