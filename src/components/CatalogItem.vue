<template>
  <div class="catalogItem">
    <img :src="product.image" alt=product.title>
    <h2>{{ product.title }}</h2>
    <p>{{ product.brand }}</p>
    <p>{{ product.regular_price.value }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CatalogItem",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  });
</script>

<style scoped>
  .catalogItem {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    row-gap: 15px;
    border: 1px solid var(--adding-background-color);
    background-color: #fff;
    border-radius: 8px;
    min-height: 300px;
    padding: 15px;
  }
</style>
