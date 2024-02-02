<template>
  <div class="catalogList">
    <CatalogItem
      :product="product"
      v-for="product in products"
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
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
  });
</script>

<style scoped>
  .catalogList {
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 15px));
    gap: 20px;
  }
</style>
