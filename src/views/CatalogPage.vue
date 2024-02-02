<template>
  <div class="catalogPage">
    <div></div>
    <div>
      <h1>Catalog</h1>
      <CatalogList :products="products"></CatalogList>
      <div class="observer" v-intersection></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CatalogList from "@/components/CatalogList.vue";

  export default defineComponent({
    components: { CatalogList },
    data() {
      return {
        products: [],
        page: 1,
        limit: 6,
        totalPages: 0,
      };
    },
    methods: {
      async fetchProducts() {
        fetch("./assets/products.json")
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.products = data;
            // init(this.products);
          });
        // try {

        //   const response = await axios.get(
        //     "./assets/products.json",
        //     {
        //       params: {
        //         __page: this.page,
        //         __limit: this.limit,
        //       },
        //     }
        //   );
        //   this.totalPages = Math.ceil(
        //     response.headers["x-total-count"] / this.limit
        //   );
        //   this.products = response.data;
        // } catch (error) {
        //   alert("Error happened, please try again.");
        // }
      },
      // async loadMoreProducts() {
      //   try {
      //     this.page += 1;
      //     const response = await axios.get(
      //       "http://localhost:3000",
      //       {
      //         params: {
      //           __page: this.page,
      //           __limit: this.limit,
      //         },
      //       }
      //     );
      //     this.totalPages = Math.ceil(
      //       response.headers["x-total-count"] / this.limit
      //     );
      //     // this.products = [...this.products, ...response.data];
      //   } catch (error) {
      //     alert("Error happened, please try again.");
      //   }
      // },
    },
    mounted() {
      this.fetchProducts();
      // console.log(productsDB);
    },
  });
</script>

<style scoped>
  .catalogPage {
    display: grid;
    grid-template-columns: 200px, 1fr;
    gap: 40px;
  }
</style>
