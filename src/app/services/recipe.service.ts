import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes = [];

  constructor() {
    const appConfig = new AppConfig();
    this.recipes = appConfig.recipes;
  }

  getRecipes() {
    return this.recipes;
  }
}
