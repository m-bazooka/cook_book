import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Molokhia',
        'The most famous dish that you should try.',
        'https://www.saveur.com/uploads/2019/02/08/IKI3TYE6RT2PWSO5KLMHS4SBYI.jpg',
        [
            new Ingredient('Onion', 1),
            new Ingredient('Garlic', 1)
        ]),
        new Recipe('Koshari Masry',
        'The most beloved dish all over Egypt.',
        'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Koshari_029_q60klq.jpg',
        [
            new Ingredient('Rice', 1),
            new Ingredient('Linsen', 1),
            new Ingredient('Macaroni', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}