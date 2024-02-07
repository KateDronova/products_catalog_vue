<template>
  <div class="shoppingCart__container">
    <h1>Shopping Cart</h1>
    <table class="shoppingCart__table" v-if="$store.state.addedProducts.length > 0">
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
      </tr>
      <TableRow v-for="product in $store.state.addedProducts" :key="product.id"></TableRow>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import TableRow from "@/components/TableRow.vue";
  import Product from "@/interfaces/productInterface";

  export default defineComponent({
    name: "ShoppingCartPage",
    components: { TableRow },
    methods: {},
    mounted() {
      this.$store.state.addedProducts.map((item: Product) => {
        console.log(item);
      })
    }
  });
</script>

<style scoped>
  .shoppingCart__container {
    padding: 30px 20px;
  }
  .shoppingCart__table {
    width: 100%;
    font: larger;
  }
</style>
