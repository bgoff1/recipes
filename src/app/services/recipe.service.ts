import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';
import { Recipe } from '../models/recipe.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  private filters = {
    search: '',
    tags: []
  };
  private filteredRecipes: Recipe[] = [];
  recipeChange: BehaviorSubject<Recipe[]>;
  resetEvent: Subject<undefined> = new Subject();
  constructor() {
    const appConfig = new AppConfig();
    this.recipes = appConfig.recipes;
    this.recipeChange = new BehaviorSubject(this.recipes);
  }

  getRecipes() {
    this.filteredRecipes = this.recipes;

    this.filterBySearch();
    this.filterByTags();

    return this.filteredRecipes;
  }

  filterBySearch() {
    if (this.filters.search) {
      this.filteredRecipes = this.filteredRecipes.filter(recipe => {
        console.log(recipe.name, this.filters.search);
        return recipe.name.toLowerCase().includes(this.filters.search);
      });
    }
  }

  filterByTags() {
    if (this.filters.tags.length) {
      this.filteredRecipes = this.filteredRecipes.filter(recipe =>
        recipe.tags.some(tag => this.filters.tags.includes(tag))
      );
    }
  }

  addFilter(name: string, value: string) {
    this.filters[name] = value;
    this.recipeChange.next(this.getRecipes());
  }

  resetFilters() {
    this.filters = {
      search: '',
      tags: []
    };
    this.resetEvent.next();
    this.recipeChange.next(this.getRecipes());
  }
}
