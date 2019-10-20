import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.scss']
})
export class RecipeTableComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    for (const item of this.recipeService.getRecipes()) {
      this.recipes.push(item);
    }
  }

  navigate(item: Recipe) {
    window.open(`/recipe/assets/${item.location}`);
    // this.router.navigateByUrl(`/assets/${item.location}`);
  }

}
