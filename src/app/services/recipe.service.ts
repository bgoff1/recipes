import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];

  constructor() {
    const appConfig = new AppConfig();
    this.recipes = appConfig.recipes;
  }

  getRecipes() {
    return this.recipes;
  }
}
