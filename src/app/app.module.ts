import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeTableComponent,
    NavbarComponent,
    SearchFilterComponent,
    CheckboxFilterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
