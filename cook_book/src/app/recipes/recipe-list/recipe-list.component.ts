import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Molokhia', 'The most famous dish that you should try.', 'https://www.saveur.com/uploads/2019/02/08/IKI3TYE6RT2PWSO5KLMHS4SBYI.jpg'),
    new Recipe('Koshari Masry', 'The most beloved dish all over Egypt.', 'https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/351160240_640956831406702_3863583054199081778_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=cw6C5j7CgBMAX-7FF3H&_nc_ht=scontent-ber1-1.xx&oh=00_AfCaW3_XK-5RMEm2N1yRGAHEcwhY0nTPtl3_X5SxjNKSUg&oe=64E7819F')
  ];

  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
