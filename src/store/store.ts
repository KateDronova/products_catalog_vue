import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: () => ({
    products: [],
    brands: [],
    shoppingCartItems: [1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,],
    isProductsLoading: false,
    page: 1,
    limit: 12,
    totalPages: 0,
  }),
  getters: {
    // filteredBrands(state) {
    //   return state.products.filter(product =>
    //     product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    //   );
    // },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },
    setShoppingCartItems(state, shoppingCartItems) {
      state.shoppingCartItems = shoppingCartItems;
    },
    setProductsLoading(state, bool) {
      state.isProductsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchBrands({ commit }) {
      try {
        const response = await axios.get("./assets/brands.json");
        commit("setBrands", response.data);
      } catch (error) {
        alert(
          "Unexpected error has happened during the loading of brands file, please reload the page."
        );
      }
    },
    async fetchProducts({ state, commit }) {
      try {
        commit("setProductsLoading", true);
        const response = await axios.get("./assets/products.json", {
          params: {
            __page: state.page,
            __limit: state.limit,
          },
        });
        commit("setTotalPages", Math.ceil(response.data.length / state.limit));
        commit("setProducts", response.data);
        // this.products.forEach(item => {
        //   const currnetBrandObject = this.brands.find(
        //     elem => elem.id === item.brand
        //   );
        //   item.brand = currnetBrandObject?.title;
        // });
      } catch (error) {
        alert("Error happened, please try again.");
      } finally {
        commit("setProductsLoading", false);
      }
    },

  },
  modules: {},
});
