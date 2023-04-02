import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist-service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{

    constructor(private ingriser:ShoppingListService){}
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/a/v/p3219-149338795459034ab237813.jpg?tr=tr:n-xlarge',[
            new Ingredient('Puri',6),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Paneer-Tikka.jpg',[
        new Ingredient('Paneer',6),
        new Ingredient('Capcicum',10)
        ])
      ];

    getrecipes(){
       return this.recipes.slice(); 
    }

    addingridentstoshoppingList(ingridents:Ingredient[]){
        this.ingriser.addIngridentsmet(ingridents)
    }
}