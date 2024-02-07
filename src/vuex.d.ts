import { Store } from 'vuex'
import Product from './interfaces/productInterface'
import Brand from './interfaces/brandInterface'

declare module '@vue/runtime-core' {
  interface State {
    products: Product[],
    brands: Brand[],
    addedProducts: Product[],
    selectedBrand: number,
    isProductsLoading: boolean,
    isDraggingProduct: boolean,
    page: number,
    limit: number,
    totalPages: number,
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
