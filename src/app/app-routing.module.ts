import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path: 'home', component: NavbarComponent},
  {path: 'display', component: DisplayComponent},
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
