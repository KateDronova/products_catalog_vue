<template>
  <div class="app">
    <HeaderBlock> </HeaderBlock>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import HeaderBlock from "./components/HeaderBlock.vue";

  export default defineComponent({
    components: {
      HeaderBlock,
    },
  });
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --basic-background-color: #f9f5e1;
    --adding-background-color: #b197fc;
    --basic-font-color: #0b0716;
  }
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: var(--basic-background-color);
    color: var(--basic-font-color);
  }
</style>
