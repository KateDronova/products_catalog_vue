<template>
  <header
    class="header"
    :style="{
      'justify-content': $route.path != '/' ? 'center' : 'space-between',
    }">
    <img
      class="logo"
      src="../../public/assets/logoAstrio.png"
      alt="logo of astrio"
      @click="$router.push('/')" />
    <MyButton
      v-if="$route.path == '/'"
      class="shoppingCart"
      :class="{
        whileDragging: $store.state.isDraggingProduct,
      }"
      @click="$router.push('/shoppingcart')"
      @dragover.prevent="setOverDropArea(true)"
      @drop="onDrop($event)">
      <div
        class="shoppingCart__text"
        :class="{
          hidden: !$store.state.isDraggingProduct,
        }">
        &#10010; Drop here to add
      </div>
      <img
        class="shoppingCart__Icon"
        src="../../public/assets/icons/shoppingCart.svg"
        alt="go to shopping cart" />
      <div class="shoppingCart__Num">{{ $store.state.addedProducts.length }}</div>
    </MyButton>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { mapMutations } from "vuex";
  import Product from "@/interfaces/productInterface";

  interface AddedProdData {
    productsToAdd: Product[];
  }

  export default defineComponent({
    name: "HeaderBlock",
    data(): AddedProdData {
      return {
        productsToAdd: [],
      };
    },
    methods: {
      ...mapMutations({
        setOverDropArea: "setDraggingProduct",
      }),
      onDrop(e: DragEvent) {
        const addedId = Number(e?.dataTransfer?.getData("text"));
        const found = this.$store.state.products.find((item: Product) => item.id === addedId);

        if (found) {
          this.productsToAdd.push(found);
        }
        this.$store.commit("setAddedProducts", this.productsToAdd);
      },
    },
  });
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    background-color: var(--adding-background-color);
    box-shadow: 0px 2px 15px 0px var(--dark-color-s);
    position: fixed;
    z-index: 10;
    width: 100%;
    & button {
      background-color: var(--light-color-s);
      &:hover {
        background-color: var(--light-color-m);
      }
      &:active {
        background-color: var(--light-color-l);
      }
    }
  }
  .logo {
    margin-left: 15px;
    width: max-content;
    height: auto;
    &:hover {
      cursor: pointer;
    }
  }
  .shoppingCart {
    position: relative;
    text-align: right;
    transition: 200ms ease-in-out;
  }
  .shoppingCart__Icon {
    width: 30px;
    height: auto;
  }
  .shoppingCart__Num {
    position: absolute;
    text-align: center;
    width: 25px;
    height: 25px;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    background-color: var(--dark-color-s);
    color: var(--light-color-s);
    font-weight: 400;
    padding: 5px;
  }
  button.whileDragging {
    background-color: var(--basic-background-color);
    outline: 5px dotted var(--dark-color-s);
    outline-offset: 8px;
    width: 30%;
  }
  .shoppingCart__text {
    font-size: larger;
    transition: 400ms ease-in-out;
  }
  .hidden {
    display: none;
    width: 0;
    height: 0;
    opacity: 0;
  }
</style>
