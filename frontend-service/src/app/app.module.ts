import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//ngrx store
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/products.reducers';

//all components
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/user/login/login.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';

//all services
import {AuthService} from './auth.service'
import {ApputilsService} from './apputils.service'
import {BackendService} from './backend.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    LoginComponent,
    Notfound404Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      products: reducer
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, ApputilsService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
