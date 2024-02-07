<template>
  <ul class="filterBlock" role="listbox">
    <li
      class="filterBlock__item"
      :class="{
        selectedValue: $store.state.selectedBrand == 0,
      }"
      role="option"
      id="all"
      @click="selectFilter('all')">
      <input
        type="radio"
        id="allBrands"
        name="brand"
        value="0"
        v-model="$store.state.selectedBrand"
        @change="$store.commit('setSelectedBrand', $store.state.selectedBrand)" />
      <label for="allBrands">All brands</label>
    </li>
    <li
      class="filterBlock__item"
      :class="{
        selectedValue: $store.state.selectedBrand == brand.id,
      }"
      v-for="brand in $store.state.brands"
      :key="brand.id"
      role="option"
      :id="`${brand.id}`"
      @click="selectFilter(`${brand.id}`)">
      <input
        type="radio"
        :id="`card${brand.id}`"
        name="brand"
        :value="brand.id"
        v-model="$store.state.selectedBrand"
        @change="$store.commit('setSelectedBrand', $store.state.selectedBrand)" />
      <label :for="`card${brand.id}`">{{ brand.title }}</label>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FilteringNav",
    methods: {
      selectFilter(brandId: string): void {
        const filterBlockItems = document.querySelectorAll(".filterBlock__item");
        filterBlockItems.forEach(element => {
          element.classList.remove("selectedValue");
        });
        const selectedBrandElement = document.getElementById(brandId);
        selectedBrandElement?.classList.add("selectedValue");
      },
    },
  });
</script>

<style scoped>
  .filterBlock {
    padding: 25px;
    background-image: linear-gradient(90deg, var(--light-color-m), var(--light-color-xl));
    min-height: 100svh;
  }
  .filterBlock__item {
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
  .selectedValue {
    text-shadow: 3px 3px 3px var(--adding-background-color);
    text-decoration: underline;
  }
</style>
