import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/user/login/login.component';
import { Notfound404Component } from './components/notfound404/notfound404.component'

const routes: Routes = [

  { path: 'category', component: CategoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: ProductsComponent },
  { path: '**', component: Notfound404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
