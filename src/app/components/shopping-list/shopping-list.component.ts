import { Component, OnInit } from '@angular/core';
import { IngredientsModel } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientsModel[] = [
    new IngredientsModel('Apple', 5),
    new IngredientsModel('Tomatos', 10),

  ];

  constructor() {}

  ngOnInit() {}
}
