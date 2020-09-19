import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {


url:any;

  readUrl(event:any) {
       if (event.target.files && event.target.files[0]) {
         var reader = new FileReader();

         reader.onload = (event:any) => {
           this.url = event.target.result;
         }

         reader.readAsDataURL(event.target.files[0]);
       }
  }

OpenImage(){
  Swal.fire({
  title: 'Panel de imagenes',
  text: 'Descripcion',
  imageUrl: this.url,
  imageWidth: 200,
  imageAlt: 'Custom image'
});
}
  constructor(){  }




  ngOnInit(): void {
  }

}
