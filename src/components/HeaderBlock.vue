<template>
  <header
    class="header"
    :style="{
      'justify-content': $route.path != '/' ? 'center' : 'space-between',
    }">
    <img
      class="logo"
      src="../../public/assets/logoAstrio.png"
      alt="logo of astrio"
      @click="$router.push('/')" />

    <MyButton
      v-if="$route.path == '/'"
      class="shoppingCartBtn"
      :class="{
        whileDragging: $store.state.isDraggingProduct,
      }"
      @click="$router.push('/shoppingcart')"
      @dragover.prevent="setOverDropArea(true)"
      @drop="onDrop($event)">
      <div
        class="shoppingCartBtn__text"
        :class="{
          hidden: !$store.state.isDraggingProduct,
        }">
        &#10010; Drop here to add
      </div>

      <img
        class="shoppingCartBtn__Icon"
        src="../../public/assets/icons/shoppingCart.svg"
        alt="go to shopping cart" />
      <div class="shoppingCartBtn__Num">{{ $store.state.totalQty }}</div>
    </MyButton>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { mapMutations } from "vuex";
  import ProductFull from "@/interfaces/productInterfaceFull";

  export default defineComponent({
    name: "HeaderBlock",
    methods: {
      ...mapMutations({
        setOverDropArea: "setDraggingProduct",
      }),
      onDrop(e: DragEvent) {
        const addedId = Number(e?.dataTransfer?.getData("text"));
        const found = this.$store.state.products.find(item => item.id === addedId);
        const arr = [...this.$store.state.addedProducts]; //just copy

        if (found) {
          const alreadyHasItem = arr.find(item => item.id === found.id);
          if (alreadyHasItem) {
            alreadyHasItem.quantity += 1;
            this.$store.commit("setAddedProducts", arr);
          } else {
            this.$store.commit("setAddedProducts", [...this.$store.state.addedProducts, found]);
          }
        }
        this.checkQty();
      },
      checkQty(): void {
        const totalQtyOfItems = this.$store.state.addedProducts.reduce(
          (sum: number, currentItem: ProductFull) => sum + currentItem.quantity,
          0
        );
        this.$store.commit("setTotalQty", totalQtyOfItems);
      },
    },
  });
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    background-color: var(--adding-background-color);
    box-shadow: 0px 2px 15px 0px var(--dark-color-s);
    position: fixed;
    z-index: 10;
    width: 100%;
    & button {
      background-color: var(--light-color-s);
      &:hover {
        background-color: var(--light-color-m);
      }
      &:active {
        background-color: var(--light-color-l);
      }
    }
  }
  .logo {
    margin-left: 15px;
    width: max-content;
    height: auto;
    &:hover {
      cursor: pointer;
    }
  }
  .shoppingCartBtn {
    position: relative;
    text-align: right;
    transition: 200ms ease-in-out;
  }
  .shoppingCartBtn__Icon {
    width: 30px;
    height: auto;
  }
  .shoppingCartBtn__Num {
    position: absolute;
    text-align: center;
    width: 25px;
    height: 25px;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    background-color: var(--dark-color-s);
    color: var(--light-color-s);
    font-weight: 400;
    padding: 5px;
  }
  button.whileDragging {
    background-color: var(--basic-background-color);
    outline: 5px dotted var(--dark-color-s);
    outline-offset: 8px;
    min-width: 100px;
    width: 30%;
  }
  .shoppingCartBtn__text {
    font-size: larger;
    transition: 400ms ease-in-out;
  }
  .hidden {
    display: none;
    width: 0;
    height: 0;
    opacity: 0;
  }
  @media (width < 550px) {
    .header {
      padding: 15px 15px;
      height: 100px;
    }
    .logo {
    margin-left: 0px;
    width: 120px;
    }
    .shoppingCartBtn__text {
      font-size: small;
      text-align: center;
    }
    button.whileDragging .shoppingCartBtn__Icon {
      display: none;
    }
  }
</style>
