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
    &:hover {
      cursor: pointer;
    }
  }
</style>
