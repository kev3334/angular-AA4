import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrafooterComponent } from './barrafooter/barrafooter.component';



@NgModule({
  declarations: [
    BarrafooterComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    BarrafooterComponent
  ]
})
export class FooterModule { }
