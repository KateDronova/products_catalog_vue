<template>
  <header class="header">
    <img
      class="logo"
      src="../../public/assets/logoAstrio.png"
      alt="logo_astrio"
      @click="$router.push('/')" />
    <MyButton class="shoppingCart" @click="$router.push('/shoppingcart')">
      <img class="shoppingCart__Icon" src="../../public/assets/shoppingCart.svg" alt="to_shopping_cart" />
      <div class="shoppingCart__Num">{{ $store.state.shoppingCartItems.length }}</div>
    </MyButton>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "HeaderBlock",
  });
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    background-color: var(--adding-background-color);
    position: fixed;
    z-index: 10;
    width: 100%;
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
  }
  .shoppingCart__Icon {
    width: 30px;
    height: auto;
  }
  .shoppingCart__Num {
    position: absolute;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    background-color: var(--dark-color-s);
    color: var(--light-color-s);
    font-weight: 500;
    padding: 5px;
  }
</style>
