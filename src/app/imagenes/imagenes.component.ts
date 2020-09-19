import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})

export class ImagenesComponent implements OnInit {
  vartime:number=1;
  varshow1= '/assets/ima/1.png';
  varshow2= '/assets/ima/2.png';
  varshow3= '/assets/ima/3.png';
  varshow4= '/assets/ima/4.png';
  vsrc1:string = this.varshow1;
  vsrc2:string = this.varshow2;
  vsrc3:string = this.varshow3;

  constructor() {}

  ngOnInit():void{
    this.resettime();
    setInterval(()=>this.tick(),5000);
  }
   resettime():void{
     this.vartime = 1;
   }

   private tick():void{
     this.vartime = this.vartime +1;
     if (this.vartime == 5){
       this.resettime();
     }
     if (this.vartime == 1 ) {
       this.vsrc1 = this.varshow1;
       this.vsrc2 = this.varshow2;
       this.vsrc3 = this.varshow3;
     }
     if (this.vartime == 2 ) {
       this.vsrc1 = this.varshow2;
       this.vsrc2 = this.varshow3;
       this.vsrc3 = this.varshow4;
     }
     if (this.vartime == 3 ) {
       this.vsrc1 = this.varshow3;
       this.vsrc2 = this.varshow4;
       this.vsrc3 = this.varshow1;
     }
     if (this.vartime == 4 ) {
       this.vsrc1 = this.varshow4;
       this.vsrc2 = this.varshow1;
       this.vsrc3 = this.varshow2;
     }

   }
}
