import recipes from './recipe-names.json';
import { Recipe } from '../app/models/recipe.model';

export class AppConfig {
    recipes: Recipe[] = [];
    constructor() {
        for (const name of recipes) {
            this.addRecipe(name);
        }
    }

    addRecipe(name: string) {
        this.recipes.push(new Recipe(name));
    }
}
