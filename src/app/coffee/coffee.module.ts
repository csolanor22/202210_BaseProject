import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';



@NgModule({
  declarations: [
    ListCoffeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListCoffeeComponent
  ]
})
export class CoffeeModule { }
