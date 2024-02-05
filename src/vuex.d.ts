import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    products: array,
    brands: array,
    shoppingCartItems: array,
    isProductsLoading: boolean,
    page: number,
    limit: number,
    totalPages: number,
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
