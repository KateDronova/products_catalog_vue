<template>
  <div class="">
    <h1>Shopping Cart</h1>
    <table v-if="$store.state.addedProducts.length > 0">
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
  import TableRow from "@/components/TableRow.vue"
 
  export default defineComponent({
    name: "ShoppingCartPage",
    components: { TableRow },
  });
</script>
