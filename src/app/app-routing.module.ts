import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';


const routes: Routes = [
  { path: '', component: RecipeTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
