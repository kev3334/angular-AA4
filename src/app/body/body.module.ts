import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido/contenido.component';
import { BarralatComponent } from './barralat/barralat.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    BarralatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContenidoComponent,
    BarralatComponent
  ]
})
export class BodyModule { }
