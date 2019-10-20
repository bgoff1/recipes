import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { RecipeImageComponent } from './components/recipe-image/recipe-image.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeTableComponent,
    RecipeImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
