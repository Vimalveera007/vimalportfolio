import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basic-router-practice';
  toggle: boolean = true;

  OnToggle() {
    this.toggle = !this.toggle;
  }

  categories = [
    { name: 'Fruits', items: 'Banana', quantity: 10, price: 25 },
    { name: 'Fruits', items: 'Apple', quantity: 15, price: 30 },
    { name: 'Vegetables', items: 'Carrot', quantity: 20, price: 18 },
    { name: 'Vegetables', items: 'Potato', quantity: 50, price: 12 },
    { name: 'Dairy', items: 'Milk', quantity: 25, price: 22 },
    { name: 'Dairy', items: 'Cheese', quantity: 8, price: 60 },
    { name: 'Snacks', items: 'Chips', quantity: 40, price: 10 },
    { name: 'Bakery', items: 'Bread', quantity: 30, price: 15 },
    { name: 'Beverages', items: 'Juice', quantity: 20, price: 35 },
    { name: 'Grains', items: 'Rice', quantity: 100, price: 40 },
  ];

  user = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
    { name: 'Vimal', active: true },
    { name: 'Karthick,', active: false },
    { name: 'Kiran', active: true },
  ];

 
}
