<template>
  <nav class="filterBlock">
    <MyInput type="radio" v-for="brand in brands" :key="brand.id" />
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FilteringNav",
    data() {
      return {
        brands: [
          {
            id: 1,
            title: "Brand 1",
            sort: "100",
            code: "brand_1",
          },
          {
            id: 2,
            title: "Brand 2",
            sort: "200",
            code: "brand_2",
          },
        ],
      }
    },
  });
</script>

<style scoped>
  .filterBlock {
    padding: 15px;
    background-color: #ddd;
  }
</style>
