import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Garlic', 5),
        new Ingredient('Onions', 2)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // This method will invoke too many events but still valid
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // Better approach to add all of them in one even then push it
        // The three dots (...) is called "Spread Operator"
        // It is an ES6 feature that turns array of elements into list of elements
        // Used when you want to push an array as multiple elements not single object
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}