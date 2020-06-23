import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'users', component: UserDetailsComponent},
  {path: 'repository', component: RepositoriesComponent},
  { path:'**', component: NotFoundComponent},
  {path: '',redirectTo: '/users', pathMatch: 'full'},

  { path: '', redirectTo:"/users", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
