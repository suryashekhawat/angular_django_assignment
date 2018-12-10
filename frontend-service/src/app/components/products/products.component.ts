import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service'
import { BackendService } from './../../backend.service'
import { ApputilsService } from './../../apputils.service';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {Store} from '@ngrx/store';
import {ProductsModel} from './../../models/products.model'
import { AppState } from './../../app.state'
import * as ProductsActions from './../../actions/products.actions'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  product_name = new FormControl('');
  product_price = new FormControl('');
  product_category = new FormControl('');

  u_product_id
  u_product_price
  u_product_category
  productsObservable: Observable<ProductsModel[]>
  productsObj: any = [];
  categories: any = []
  constructor(
    public auth: AuthService,
    public backend: BackendService,
    public apputils: ApputilsService,
    private store: Store<AppState>,
  ) {
    this.productsObservable = store.select('products');
    this.productsObservable.subscribe((products)=>{
      this.productsObj = products;

    })
    
    this.refreshNow();

  }

  ngOnInit() {
  }
  add() {
    let my_product = {
      // product_id: 'None',
      name: this.product_name.value,
      price: this.product_price.value,
      category: this.product_category.value
    }
    console.log(my_product)
    this.backend.addNewProduct(my_product).subscribe((response) => {
      console.log(response)
      my_product['product_id']=response['product_id'];
      this.store.dispatch(new ProductsActions.AddProduct(my_product))
      // this.refreshNow();
    })
  }
  editRequired(id) {
    console.log(id)
    this.productsObj.map(product => product.product_id == id ? product.editRequired = true : product.editRequired = false)
  }
  refreshNow() {
    this.auth.isAllowedToView();
    let new_token = this.auth.getClientAccessToken()
      .subscribe((response) => {
        this.apputils.setLocalStorage('accessToken', response['access'])
        console.log('new access token set successfully.', response['access'])
        this.backend.getAllCategories()
          .subscribe((categories) => {
            console.log(categories)
            this.categories = categories;
            this.categories.map(c => c.editRequired == false);

            this.backend.getAllProducts()
              .subscribe((products) => {
                console.log('all products', products)
                this.store.dispatch(new ProductsActions.RefreshProductsList(products))

                // this.productsObj = products;
                // this.productsObj.map(p => p.editRequired = false)
              })
          })

      })

  }
  remove(id) {
    this.backend.removeProduct(id)
      .subscribe((response)=>{
        this.store.dispatch(new ProductsActions.RemoveProduct({product_id:id}))
        console.log('deleted', response)
        // this.refreshNow()
      })
  }

  updateProduct(id, name, price, category){
    console.log(id, name, price, category)
    let product = {
      name, price, category
    }
    this.backend.updateProduct(id, product)
      .subscribe((response)=>{
        this.store.dispatch(new ProductsActions.UpdateProduct({product_id:id, name, price, category}))
        console.log(response)
        // this.refreshNow();

      })
  }
}
