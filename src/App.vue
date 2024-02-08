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
    --basic-font-color: #000;
    --adding-background-color: #b197fc;
    --adding-light-color: #bda7ff;
    --adding-dark-color: #9d89d9;
    --light-color-s: #fff;
    --light-color-m: #e7e7e7;
    --light-color-l: #d1d1d1;
    --light-color-xl: #b8b8b8;
    --dark-color-s: #080808;
    --dark-color-m: #131313;
    --dark-color-l: #292929;
  }
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: var(--basic-background-color);
    color: var(--basic-font-color);
    min-height: 100svh;
  }
  main {
    padding-top: 100px;
  }
  h1,
  h2,
  h3 {
    font-family: "Museo W01 900";
  }
</style>
