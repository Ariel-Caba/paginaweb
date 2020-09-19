import { Component, OnInit } from '@angular/core';
import { SdataBaseService } from '../sdata-base.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public database:SdataBaseService) { }

  ngOnInit(): void {
  }

}
