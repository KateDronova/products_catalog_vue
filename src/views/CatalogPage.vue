<template>
  <div class="catalogPage">
    <FilteringNav></FilteringNav>
    <div class="catalogListSection">
      <h1>Catalog</h1>
      <CatalogList
        v-if="!$store.state.isProductsLoading"
        :products="$store.getters.filteredProducts"></CatalogList>
      <div class="loading" v-else>
        <RotateLoader color="var(--adding-background-color)"></RotateLoader>
      </div>
      <!-- <div class="observer" v-intersection></div> -->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CatalogList from "@/components/CatalogList.vue";
  import FilteringNav from "@/components/FilteringNav.vue";
  import RotateLoader from "vue-spinner/src/RotateLoader.vue";

  export default defineComponent({
    components: { CatalogList, FilteringNav, RotateLoader },
    mounted() {
      this.$store.dispatch("fetchBrands");
      this.$store.dispatch("fetchProducts");
    },
  });
</script>

<style scoped>
  .catalogPage {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
  .catalogListSection {
    padding: 30px 6%;
  }
  .loading {
    height: 100svh;
    text-align: center;
    margin-top: 40svh;
  }
  @media (width < 550px) {
    .catalogPage {
      grid-template-columns: 40% 1fr;
      font-size: smaller;
    }
  }
</style>
