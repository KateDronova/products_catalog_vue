<template>
  <header class="header">
    <img
      src="../../public/assets/logoAstrio.png"
      alt="logo_astrio"
      @click="$router.push('/')" />
    <MyButton class="toCart" @click="$router.push('/shoppingcart')">
      <img src="../../public/assets/shoppingCart.svg" alt="to_shopping_cart" />
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
    padding: 15px;
    background-color: var(--adding-background-color);
  }
</style>
