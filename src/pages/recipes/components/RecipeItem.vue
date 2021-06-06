<template>
  <div class="col-md-3 col-sm-6 col-12 q-pa-md recipe-item">
    <q-card class="my-card">
      <q-img @click="showRecipe" class="hover" height="200px" :src="recipe.image || defaultImage" basic>
        <div class="absolute-bottom text-center text-h6">
          {{recipe.name}}
        </div>
        <template v-slot:error>
          <img width="100%" height="100%" :src="defaultImage" alt="">
          <div class="absolute-bottom text-center text-h6">
            {{recipe.name}}
          </div>
        </template>
      </q-img>

      <q-card-section>
        {{recipe.description}}
      </q-card-section>
      <q-card-section class="row justify-between">
        <base-button @click="addToList" icon="add" color="secondary" round><q-tooltip>Add to shopping list</q-tooltip></base-button>
        <base-button @click="editRecipe" icon="edit" color="blue" round><q-tooltip>edit recipe</q-tooltip></base-button>
        <base-button @click="deleteRecipe" icon="delete" color="red" round><q-tooltip>Delete recipe</q-tooltip></base-button>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "RecipeItem",

  props: {
    recipe: {
      type: Object,
    },
  },

  data() {
    return {
      defaultImage: require('../../../assets/background.png')
    }
  },

  methods: {
    showRecipe() {
      this.$emit('show-recipe', this.recipe)
    },
    editRecipe() {
      this.$emit("edit-recipe", this.recipe)
    },
    deleteRecipe() {
      this.$emit('remove-recipe', this.recipe.id)
    },
    addToList() {
      this.$emit('add-to-list', this.recipe)
    }
  },
};
</script>

<style lang="scss" scoped>
.recipe-item {

    .q-card{
      transition: .3s ease-in-out;
      &:hover {
      cursor: pointer;
      transform: scale(1.03);
      box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
    }
    }
  }
</style>
