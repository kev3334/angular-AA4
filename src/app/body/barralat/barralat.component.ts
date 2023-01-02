import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barralat',
  templateUrl: './barralat.component.html',
  styleUrls: ['./barralat.component.css']
})
export class BarralatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()nombreBarraLat = "Jose Sanchez";
  @Output() cambioNombreContenido = new EventEmitter<string>();
  //nombreBarraLat = "Jose Sanchez";

  ChangeNombreBarraLat(){
    this.nombreBarraLat="Bon Jovi";
    this.cambioNombreContenido.emit(this.nombreBarraLat);
  }
}
