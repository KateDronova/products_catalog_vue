<template>
  <div
    class="catalogItem"
    @dragstart="setDraggingProduct(true), onDragStart($event, product.id)"
    @dragend="setDraggingProduct(false)"
    draggable="true">
    <div class="catalogItem__img">
      <img :src="product.image" :alt="product.title" />
    </div>
    <h2>{{ product.title }}</h2>
    <p>{{ product.brandTitle }}</p>
    <p>
      <span v-if="product.regular_price.currency === 'USD'">$</span
      >{{ product.regular_price.value }}
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { mapMutations } from "vuex";

  export default defineComponent({
    name: "CatalogItem",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      ...mapMutations({
        setDraggingProduct: "setDraggingProduct",
      }),
      onDragStart(e: DragEvent, productId: string) {
        e?.dataTransfer?.setData("text/plain", productId);
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
    font-weight: 600;
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
  @media (width < 550px) {
    .catalogItem {
      width: 180px;
    }
    .catalogItem__img {
      min-height: auto;  
    }
  }
</style>
