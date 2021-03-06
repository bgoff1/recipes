import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.scss']
})
export class RecipeTableComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeChange.subscribe(
      recipes =>
        (this.recipes = recipes.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }

  navigate(item: Recipe) {
    window.open(
      window.location.href === 'http://localhost:4200/'
        ? `/assets/${item.location}`
        : `/recipes/assets/recipes/${item.location}`
    );
  }
}
