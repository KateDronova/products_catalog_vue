<template>
  <input type="radio" class="input" @change="changeOption" />
  <!-- <input type="radio" class="input" @change="changeOption" /> -->
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MyInput",
    methods: {
      changeOption(event: Event) {
        // this.$emit('update:modelValue', event.target.checked)
      }
    }
  });
</script>

<style scoped>
  .input {
    padding: 10px;
  }
</style>
