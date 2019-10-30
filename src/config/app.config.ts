import recipes from './recipe-names.json';
import { Recipe } from '../app/models/recipe.model';

export class AppConfig {
  recipes: Recipe[] = [];
  tagList: Set<string> = new Set();
  constructor() {
    for (const name of recipes) {
      this.addRecipe(name);
    }
  }

  addRecipe(name: string) {
    const recipe = new Recipe(name);
    this.recipes.push(recipe);
    for (const tag of recipe.tags) {
      this.tagList.add(tag);
    }
  }
}
