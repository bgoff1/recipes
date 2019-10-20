import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { RecipeImageComponent } from './components/recipe-image/recipe-image.component';


const routes: Routes = [
  { path: '', component: RecipeTableComponent },
  { path: 'recipe/:image', component: RecipeImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
