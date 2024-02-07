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
    background-color: var(--light-color-s);
    border: none;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background-color: var(--light-color-m);
    }
    &:active {
      background-color: var(--light-color-l);
    }
  }
</style>
