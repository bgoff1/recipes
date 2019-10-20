import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.scss']
})
export class RecipeTableComponent implements OnInit {
  recipes = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    for (let i = 0; i < 25; i++) {
      for (const item of this.recipeService.getRecipes()) {
        this.recipes.push(item);
      }
    }
  }

  navigate(item) {
    window.open(`/assets/${item.location}`);
    // this.router.navigateByUrl(`/assets/${item.location}`);
  }

}
