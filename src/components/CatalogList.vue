<template>
  <div class="catalogList">
    <CatalogItem
    v-for="product in $store.getters.filteredProducts"
    :product="product"
    :key="product.id"></CatalogItem>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CatalogItem from "@/components/CatalogItem.vue";

  export default defineComponent({
    name: "CatalogList",
    components: {
      CatalogItem,
    },
  });
</script>

<style scoped>
  .catalogList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    row-gap: 5px;
    column-gap: 2%;
    margin-top: 25px;
  }
</style>
