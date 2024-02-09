<template>
  <div class="shoppingCart__container">
    <div v-if="$store.state.totalQty > 0">
      <h1>Shopping Cart</h1>
      <div class="tableWrapper">
        <table class="shoppingCart__table">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
          <TableRow
            v-for="product in $store.state.addedProducts"
            :product="product"
            :key="product.id"></TableRow>
          <tr>
            <td class="totalSum" colspan="5">Subtotal: ${{ $store.getters.checkSum }}</td>
          </tr>
        </table>
      </div>
      <MyButton class="shoppingCart__submitBtn" type="submit" @click="makeAnOrder"
        >Checkout</MyButton
      >
    </div>

    <div class="emptyCart" v-else>
      <h1>There is nothing in your Cart now!</h1>
      <p>Let's go shopping!</p>
      <MyButton type="button" @click="$router.push('/')">To Catalog</MyButton>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import TableRow from "@/components/TableRow.vue";
  // import ProductFull from "@/interfaces/productInterfaceFull";
  import MyButton from "@/components/UI/MyButton.vue";

  export default defineComponent({
    name: "ShoppingCartPage",
    components: { TableRow, MyButton },
    methods: {
      makeAnOrder() {
        alert("Your order is confirmed");
        this.$store.commit("setAddedProducts", []);
        this.$store.commit("setTotalSum", 0);
        this.$store.commit("setTotalQty", 0);
      },
    },
    computed: {
      // checkSum(): number {
      //   const sum = +this.$store.state.addedProducts
      //     .reduce(
      //       (sum: number, currentItem: ProductFull) =>
      //         sum + currentItem.regular_price.value * currentItem.quantity,
      //       0
      //     )
      //     .toFixed(3);
      //   return sum;
      // },
    },
    mounted() {
      this.$store.commit("setTotalSum", this.$store.getters.checkSum);
    },
  });
</script>

<style scoped>
  .shoppingCart__container {
    padding: 30px 20px;
  }
  .tableWrapper {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    margin: 30px 0;
  }
  .shoppingCart__table {
    width: 100%;
    min-width: 500px;
    font: larger;
    background-color: var(--light-color-s);
  }
  .shoppingCart__submitBtn {
    margin-right: 3%;
    margin-left: auto;
    padding: 15px 30px;
    font-size: large;
  }
  .emptyCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    font-weight: 600;
    font-size: larger;
    margin-top: 20svh;
  }
  th {
    padding: 20px;
    border-bottom: 1px solid var(--light-color-m);
  }
  td {
    width: 10%;
    padding: 10px 20px;
  }
  .totalSum {
    text-align: right;
    font-size: larger;
    font-weight: 600;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  @media (width < 768px) {
    .shoppingCart__container {
      font-size: small;
    }
    .shoppingCart__submitBtn {
      font-size: medium;
      padding: 12px 18px;
      margin-right: auto;
    }
  }
</style>
