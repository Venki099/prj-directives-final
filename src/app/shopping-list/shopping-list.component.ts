import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] ;
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  constructor(private shoppinglistser:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistser.getingridents();
    this.shoppinglistser.ingridentschanged.subscribe((ingidents:Ingredient[])=>{
      this.ingredients = ingidents;
    })
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   // this.ingredients.push(ingredient);
  // }
}
