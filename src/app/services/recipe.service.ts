import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes = [];

  constructor() {
    this.recipes = AppConfig.getRecipeMappings();
  }

  getRecipes() {
    return this.recipes;
  }
}
