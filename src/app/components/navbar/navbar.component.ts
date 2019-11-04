import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import tags from '../../../config/tags.json';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = false;
  get tags() {
    return tags;
  }
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  handleSearch(event: string) {
    this.recipeService.addFilter('search', event);
  }

  handleTagFilter(event) {
    this.recipeService.addFilter('tags', event);
  }

  resetFilters() {
    this.recipeService.resetFilters();
  }
}
