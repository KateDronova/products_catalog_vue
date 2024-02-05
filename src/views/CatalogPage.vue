<template>
  <div class="catalogPage">
    <FilteringNav :brands="$store.state.brands"></FilteringNav>
    <div class="catalogListSection">
      <h1>Catalog</h1>
      <CatalogList
        v-if="!$store.state.isProductsLoading"
        :products="$store.state.products"></CatalogList>
      <div v-else>Loading...</div>
      <!-- <div class="observer" v-intersection></div> -->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CatalogList from "@/components/CatalogList.vue";
  import FilteringNav from "@/components/FilteringNav.vue";

  export default defineComponent({
    components: { CatalogList, FilteringNav },
    methods: {},
    mounted() {
      this.$store.dispatch("fetchBrands");
      this.$store.dispatch("fetchProducts");
    },
    computed: {},
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
</style>
