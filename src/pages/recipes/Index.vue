<template>
  <div class="recipe q-my-lg q-px-xl">
    <div class="row justify-between q-my-lg">
      <div class="text-h4 text-center text-info">Please Select a Recipe!</div>
      <base-button color="primary" @click="newRecipe">Add Recipe</base-button>
    </div>
    <div class="row items-center">
      <!-- recipe item -->
      <recipe-item
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
        @add-to-list="addToList"
        @show-recipe="showRecipe"
        @edit-recipe="editRecipe"
        @remove-recipe="removeRecipe"
      ></recipe-item>
    </div>
    <!-- recipe form -->
    <recipe-form v-if="recipeDialog" :data="recipe" :dialog="recipeDialog" :isEdit="isEdit" @close="recipeDialog=false"></recipe-form>
    <!-- confirm delete -->
    <confirm-delete :confirmDelete="confirmDelete" @submit-delete="submitDelete" :id="id" @close="confirmDelete=false"></confirm-delete>
    <!-- recipe details -->
    <recipe-details v-if="detailsDialog" :data="recipe" :dialog="detailsDialog" @close="detailsDialog=false"></recipe-details>
  </div>
</template>

<script>
import RecipeItem from "./components/RecipeItem.vue"
import RecipeForm from "./components/RecipeForm.vue"
import {mapActions ,mapState} from "vuex"
import RecipeDetails from './components/RecipeDetails.vue'
import {notify} from "../../utils/notify"

export default {
  name: 'Recipe',

  components: {
    RecipeItem,
    RecipeForm,
    RecipeDetails
  },

  data() {
    return {
      recipe: {},
      recipeDialog: false,
      isEdit: false,
      confirmDelete: false,
      id: null,
      detailsDialog: false
    }
  },

  methods: {
    ...mapActions("Recipe", ["deleteRecipe"]),
    ...mapActions("ShoppingList", ["addIngr"]),
    newRecipe() {
      this.recipe = {ingredients: []}
      this.isEdit = false
      this.recipeDialog = true
    },
    showRecipe(recipe) {
      this.recipe = recipe
      this.detailsDialog = true
    },
    editRecipe(recipe) {
      this.recipe = JSON.parse(JSON.stringify(recipe));
      this.isEdit = true
      this.recipeDialog = true
    },
    removeRecipe(id) {
      this.confirmDelete = true
      this.id = id
    },
    async submitDelete(id) {
      await this.deleteRecipe(id)
      this.confirmDelete = false
      notify("Deleted item successfully", "positive")
    },
    async addToList(recipe) {
      let ingredients = recipe.ingredients.map(e => ({
        id: e.id,
        name: e.name,
        quantity: e.quantity
      }))
      await this.addIngr(ingredients)
      notify("Added to list successfully", "positive")
    }
  },

  computed: {
    ...mapState("Recipe", ["recipes"])
  }
}
</script>
