import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavComponent } from './menunav/menunav.component';



@NgModule({
  declarations: [
    MenunavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenunavComponent
  ]
})
export class HeaderModule { }
