<template>
  <ul class="filterBlock" role="listbox">
    <li class="filterBlock__item" role="option">
      <MyInput id="allBrands" type="radio" />
      <label for="allBrands">All brands</label>
    </li>
    <li
      class="filterBlock__item"
      v-for="brand in brands"
      :key="brand.id"
      role="option">
      <MyInput id="brand" type="radio" />
      <label for="brand">{{ brand.title }}</label>
    </li>
  </ul>
  <!-- <select class="filterList" :size="brands.length">
    <option class="filterList__item" v-for="brand in brands" :key="brand.id">{{ brand.title }}</option>
  </select> -->
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FilteringNav",
    data() {
      return {};
    },
    props: {
      brands: {
        type: Object,
        required: true,
      },
    },
  });
</script>

<style scoped>
  .filterBlock {
    padding: 25px;
    background-image: linear-gradient(90deg, var(--light-color-m), var(--light-color-xl));
  }
  .filterBlock__item  {
    padding: 10px;
    font-family: "Museo W01 900";
    font-size: larger;
    & label:hover {
      cursor: pointer;
      text-shadow: 3px 3px 3px var(--adding-background-color);
      text-decoration: underline;
    }
    & label:active {
      text-decoration: none;
    }
  }
  .filterBlock__item::marker {
    color: transparent;
  }
  .filterBlock__item [type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>
