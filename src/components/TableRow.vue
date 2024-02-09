<template>
  <tr class="tr">
    <td class="itemData">
      <div class="flex" style="justify-content: start; flex-wrap: wrap">
        <div class="thumbnail" :style="`background-image: url(${product?.image})`"></div>
        {{ product?.brandTitle }} / {{ product?.title }}
      </div>
    </td>
    <td>
      <span v-if="product.regular_price.currency === 'USD'">$</span
      >{{ product?.regular_price.value }}
    </td>
    <td>
      <div class="flex">
        <input class="quantityInput" type="number" :value="product?.quantity" />
      </div>
    </td>
    <td><span v-if="product.regular_price.currency === 'USD'">$</span>{{ totalSumOfOneItem }}</td>
    <td>
      <MyButton class="grayButton"
        ><img
          style="width: 12px"
          src="../../public/assets/icons/trash.svg"
          alt="delete product from shopping cart"
      /></MyButton>
    </td>
  </tr>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import MyButton from "./UI/MyButton.vue";

  export default defineComponent({
    name: "TableRow",
    components: { MyButton },
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      updateTotalSum(): void {
        this.$store.commit("setTotalSum", this.$store.state.totalSum + this.totalSumOfOneItem);
      },
    },
    computed: {
      totalSumOfOneItem(): number {
        return +(this.product.regular_price.value * this.product.quantity).toFixed(3);
      },
    },
    mounted() {
      this.updateTotalSum();
    },
  });
</script>

<style scoped>
  td {
    width: 10%;
    padding: 10px 20px;
    text-align: center;
    border-bottom: 1px solid var(--light-color-xl);
  }
  .itemData {
    width: 50%;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
  .thumbnail {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid var(--light-color-xl);
  }
  .grayButton {
    border: 1px solid var(--light-color-l);
    background-color: var(--light-color-s);
    margin-left: auto;
    &:hover {
      background-color: var(--light-color-m);
    }
    &:active {
      background-color: var(--light-color-l);
    }
  }
  .quantityInput {
    width: 40px;
    padding: 5px;
    border: 1px solid var(--light-color-l);
  }
  /* .smallBtn {
    padding: 3px;
  } */
  @media (width < 768px) {
    .flex {
      gap: 10px;
    }
  }
</style>
