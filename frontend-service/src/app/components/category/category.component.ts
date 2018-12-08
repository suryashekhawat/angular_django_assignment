import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { BackendService } from './../../backend.service';
import { ApputilsService } from './../../apputils.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  category_type = new FormControl('');
  categories: any
  u_category_type
  constructor(
    public auth: AuthService,
    public backend: BackendService,
    public apputils: ApputilsService
  ) {
    this.refreshNow();
  }

  ngOnInit() {
  }

  editRequired(id) {
    console.log(id)
    this.categories.map(cat => cat.id == id ? cat.editRequired = true : cat.editRequired = false)
  }

  remove(id) {
    this.backend.removeCategory(id)
      .subscribe((response)=>{
        console.log('deleted', response)
        this.refreshNow()
      })
  }

  add() {
    console.log('category_type : ', this.category_type.value)
    this.backend.addNewCategory({
      type: this.category_type.value
    }).subscribe((response) => {
      console.log(response)
      this.refreshNow();
    })
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
          })

      })
  }
  updateCategory(id, type){
    let category = {
      "type": type
    }
    this.backend.updateCategory(id, category)
      .subscribe((response)=>{
        console.log(response)
        this.refreshNow();
      })
  }
}
