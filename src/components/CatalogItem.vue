<template>
  <div class="catalogItem">
    <div class="catalogItem__img">
      <img :src="product.image" :alt="product.title" />
    </div>
    <h2>{{ product.title }}</h2>
    <p>{{ product.brand }}</p>
    <p>
      <span v-if="product.regular_price.currency === 'USD'">$</span
      >{{ product.regular_price.value }}
    </p>
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
    justify-content: space-between;
    row-gap: 10px;
    width: 220px;
    padding-bottom: 15px;
    &:hover {
      cursor: pointer;
    }
  }
  .catalogItem__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 280px;
    border: 1px solid var(--dark-color-s);
    background-color: var(--light-color-s);
    border-radius: 3px;
  }
  .catalogItem__img > img {
    width: 100%;
    height: auto;
  }
</style>
