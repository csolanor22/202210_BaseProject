import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})
export class ListCoffeeComponent implements OnInit {

  coffees: Array<Coffee> = [];
  counterCoffeeBlent: number = 0;
  counterCoffeeOrigin: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.getCoffees();
  }

  getCoffees(){
    this.coffeeService.getCoffeeList().subscribe((coffees) =>{
      this.coffees = coffees;
      coffees.forEach(coffee => {
        this.countCoffeeType(coffee);
      });
    });
  }

  countCoffeeType(coffee: Coffee){
    if(coffee.tipo === 'Blend')
      this.counterCoffeeBlent++;
    else if(coffee.tipo === 'Café de Origen')
      this.counterCoffeeOrigin++;
  }


}
