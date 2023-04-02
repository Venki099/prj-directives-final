import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingridentschanged = new EventEmitter<Ingredient[]>()
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getingridents(){
        return this.ingredients.slice();
    }

    addingridents(ingrident:Ingredient){
        this.ingredients.push(ingrident);
        this.ingridentschanged.emit(this.ingredients.slice());
    }

    addIngridentsmet(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingridentschanged.emit(this.ingredients.slice());
    }
}