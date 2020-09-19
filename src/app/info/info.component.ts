import { Component, OnInit } from '@angular/core';
import { SdataBaseService } from '../sdata-base.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  constructor(public database:SdataBaseService, private router: Router) { }

  ngOnInit(): void {
  }
Salir(){
  this.database.SalirA();
  this.router.navigate(['/index']);
}
}
