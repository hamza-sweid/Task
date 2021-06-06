<template>
  <div class="shopoing q-my-lg q-px-xl">
    <div class="row justify-between q-my-lg">
      <div class="text-h4 text-center text-info">Your shopping list</div>
      <base-button color="primary" @click="addIngr">Add ingrediant</base-button>
    </div>
    <!-- list items -->
    <list-items v-for="(item, i) in ingredients" :key="i" :item="item" @remove-ingr="removeIngr" @edit-quantity="editQuantity"></list-items>
    <!-- add ingredients -->
    <add-ingr v-if="ingrDialog" :dialog="ingrDialog" @close="ingrDialog=false"></add-ingr>
    <!--  -->
    <base-button v-if="areIngrs" @click="clearIngr" class="q-my-lg" color="negative">Reset ingredients</base-button>
  </div>
</template>

<script>
import ListItems from "./components/ListItems.vue"
import {mapActions, mapState} from "vuex"
import AddIngr from './components/AddIngr.vue'
import {notify} from "../../utils/notify"
export default {
  name: "ShoppingList",

  components: {
    ListItems,
    AddIngr
  },

  data() {
  return {
      ingrDialog: false
    }
  },

  methods: {
    ...mapActions("ShoppingList", ["deleteIngr", "resetIngr", "updateQuantity"]),
    addIngr() {
      this.ingrDialog = true
    },
    async removeIngr(id) {
      await this.deleteIngr(id)
      notify("Deleted item successfully", "positive")
    },
    async clearIngr() {
      await this.resetIngr()
      notify("Reseted items successfully", "positive")
    },
    async editQuantity(data) {
      await this.updateQuantity(data)
      notify("Updated quantity successfully", "positive")
    }
  },

  computed: {
    ...mapState("ShoppingList", ["ingredients"]),
    areIngrs() {
      return this.ingredients.length > 0
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
