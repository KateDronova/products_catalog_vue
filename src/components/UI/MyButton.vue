<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MyButton",
  });
</script>

<style scoped>
  .button {
    padding: 10px;
    background-color: var(--light-color-s);
    border: none;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background-color: var(--light-color-m);
      /* box-shadow: 1px 2px 5px var(--dark-color); */
    }
    &:active {
      background-color: var(--light-color-l);
      /* box-shadow: 0px 1px 3px var(--dark-color); */
    }
  }
</style>
