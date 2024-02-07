<template>
  <tr>
    <!-- <td>
      <div class="thumbnail" :style="`background-image: url(${product.image})`"></div>
       {{ product.brand }} / {{ product.title }}
    </td>
    <td>{{ product.regular_price.value }}</td> -->
    <td>Qty</td>
    <td>Total</td>
  </tr>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TableRow",
    components: {},
    props: {
      product: {
        type: Object
      }
    }
  });
</script>
