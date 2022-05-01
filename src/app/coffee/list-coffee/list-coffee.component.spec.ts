import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

import { ListCoffeeComponent } from './list-coffee.component';

describe('ListCoffeeComponent', () => {
  let component: ListCoffeeComponent;
  let fixture: ComponentFixture<ListCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListCoffeeComponent ],
      providers: [{ provide: CoffeeService, useClass: CoffeeServiceStub }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have "coffees" populated ', () => {
    expect(component.coffees.length).toBeGreaterThan(0);
  });

  it('should test the table ', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);

      // Header row
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('#');
      expect(headerRow.cells[1].innerHTML).toBe('Nombre');
      expect(headerRow.cells[2].innerHTML).toBe('Tipo');
      expect(headerRow.cells[3].innerHTML).toBe('Región');

      // Data row 1
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('1');
      expect(row1.cells[1].innerHTML).toBe('Cafe 1');
      expect(row1.cells[2].innerHTML).toBe('Blended');
      expect(row1.cells[3].innerHTML).toBe('Caldas, Colombia');

      // Data row 2
      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe('2');
      expect(row2.cells[1].innerHTML).toBe('Cafe 2');
      expect(row2.cells[2].innerHTML).toBe('Blended');
      expect(row2.cells[3].innerHTML).toBe('Caldas, Colombia');

      // Data row 3
      let row3 = tableRows[3];
      expect(row3.cells[0].innerHTML).toBe('3');
      expect(row3.cells[1].innerHTML).toBe('Cafe 3');
      expect(row3.cells[2].innerHTML).toBe('Blended');
      expect(row3.cells[3].innerHTML).toBe('Caldas, Colombia');

      done();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class CoffeeServiceStub {
  coffeeList = [
    new Coffee(1, 'Cafe 1', 'Blended', 'Caldas, Colombia', 'Sabor 1', 1234, 'imagen 1'),
    new Coffee(2, 'Cafe 2', 'Blended', 'Caldas, Colombia', 'Sabor 2', 1234, 'imagen 2'),
    new Coffee(3, 'Cafe 3', 'Blended', 'Caldas, Colombia', 'Sabor 3', 1234, 'imagen 3')
  ];

  getCoffeeList() {
    return of(this.coffeeList)
  }
}
