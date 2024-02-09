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
        name="brand"
        id="allBrands"
        value="0"
        v-model="$store.state.selectedBrand"
        @change="$store.commit('setSelectedBrand', $store.state.selectedBrand)" />

      <label for="allBrands">All brands</label>
    </li>

    <li
      v-for="brand in $store.state.brands"
      @click="selectFilter(`${brand.id}`)"
      role="option"
      :key="brand.id"
      :id="`${brand.id}`"
      class="filterBlock__item"
      :class="{
        selectedValue: $store.state.selectedBrand == brand.id,
      }">

      <input
        type="radio"
        name="brand"
        :id="`card${brand.id}`"
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
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .selectedValue {
    text-shadow: 3px 3px 3px var(--adding-background-color);
    text-decoration: underline;
  }
</style>
