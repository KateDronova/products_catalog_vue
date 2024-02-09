import { createStore } from "vuex";
import axios from "axios";
import Product from "@/interfaces/productInterface";
import ProductFull from "@/interfaces/productInterfaceFull";
import { State } from "vue";

export default createStore<State>({
  state: () => ({
    products: [],
    brands: [],
    addedProducts: [],
    selectedBrand: 0,
    totalSum: 0,
    totalQty: 0,
    isProductsLoading: false,
    isDraggingProduct: false,
    page: 1,
    limit: 6,
    totalPages: 0,
  }),
  getters: {
    filteredProducts(state) {
      if (state.selectedBrand == 0) {
        return state.products;
      }
      return [...state.products].filter((product) =>
        product.brand === state.selectedBrand
      );
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },
    setAddedProducts(state, addedProducts) {
      state.addedProducts = addedProducts;
    },
    setSelectedBrand(state, selectedBrand) {
      state.selectedBrand = selectedBrand;
    },
    setTotalSum(state, totalSum) {
      state.totalSum = totalSum;
    },
    setTotalQty(state, totalQty) {
      state.totalQty = totalQty;
    },
    setProductsLoading(state, bool) {
      state.isProductsLoading = bool;
    },
    setDraggingProduct(state, bool) {
      state.isDraggingProduct = bool;
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
          "Unexpected error has just happened, please reload the page."
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

        response.data.map((item: ProductFull) => {
          let index = 0;
          const brandObjFromProxy = JSON.parse(JSON.stringify(state.brands));
          while (brandObjFromProxy[index].id && brandObjFromProxy[index].id !== item.brand) {
            index += 1;
          }
          item.brandTitle = brandObjFromProxy[index].title;
          item.quantity = 1;
        })
        commit("setProducts", response.data);
      } catch (error) {
        alert("Unexpected error has just happened, please reload the page.");
      } finally {
        commit("setProductsLoading", false);
      }
    },
  },
  modules: {},
});
