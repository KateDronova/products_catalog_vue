<template>
  <tr class="tr">
    <td class="itemData">
      <div class="thumbnail" :style="`background-image: url(${product?.image})`"></div>
      {{ product?.brandTitle }} / {{ product?.title }}
    </td>
    <td>{{ product?.regular_price.value }}</td>
    <td>Qty</td>
    <td>Total</td>
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

  export default defineComponent({
    name: "TableRow",
    components: {},
    props: {
      product: {
        type: Object,
        required: true,
      },
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
    text-align: left;
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
</style>
