import { ProductsModel } from './models/products.model'
import { UserModel } from './models/user.model'
import { CategoryModel } from './models/category.model'

export interface AppState {
  products: ProductsModel[]
  user: UserModel[]
  categories: CategoryModel[]
}
