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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--adding-background-color);
    border: none;
    border-radius: 3px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      background-color: var(--adding-light-color);
    }
    &:active {
      background-color: var(--adding-dark-color);
    }
  }
</style>
