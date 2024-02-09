import { Store } from 'vuex'
import ProductFull from './interfaces/productInterfaceFull'
import Brand from './interfaces/brandInterface'

declare module '@vue/runtime-core' {
  interface State {
    products: ProductFull[],
    brands: Brand[],
    addedProducts: ProductFull[],
    selectedBrand: number,
    totalSum: number,
    totalQty: number,
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
