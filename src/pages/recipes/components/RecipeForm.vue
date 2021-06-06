<template>
  <q-dialog v-model="handle" persistent>
    <q-card class="add-recipe">
      <q-card-section>
        <div class="text-h6">{{title}}</div>
      </q-card-section>

      <q-form
        :greedy="true"
        @submit="submit"
      >
        <q-card-section class="q-pt-none row">
          <base-input class="col-sm-6 q-mb-md col-12 q-pa-sm" v-model="newData.name" :rules="rules" label="Name" />
          <base-input class="col-sm-6 q-my-sm col-12 q-pa-sm" v-model="newData.image" :rules="rules" label="Image URL" />
          <base-input class="col-12 q-pa-sm" type="textarea" v-model="newData.description" :rules="rules" label="Description" />
          <!-- ingredients -->
          <div class="col-sm-12 q-my-md row" v-for="(item, i) in newData.ingredients" :key="i">
            <p class="text-h6 text-blue col-12">Ingredient {{i+1}}</p>
            <base-input
              class="col-sm-6 col-xs-12 q-px-sm"
              label="Name"
              v-model="item.name"
              :rules="rules"
            >
            </base-input>
            <base-input
              class="col-sm-6 col-xs-12 q-px-sm"
              type="number"
              label="Quantity"
              v-model="item.quantity"
              :rules="quantityRules"
            >
            </base-input>
            <div class="col-12">
              <q-btn @click="removeIngredient(i)" no-caps class="float-right" color="negative">Remove ingredient</q-btn>
            </div>
          </div>
          <div class="col-12"><q-btn @click="addIngredient" class="q-mx-sm" no-caps color="secondary">Add ingredient</q-btn></div>
        </q-card-section>
        <!-- actions -->
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn color="grey-6 q-px-sm" label="Cancel" @click="$emit('close')" />
          <q-btn class="q-ml-md q-px-sm" color="primary" label="Apply" type="submit"/>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import {mapActions} from "vuex"
import {notify} from "../../../utils/notify"

export default {
  name: "RecipeForm",
  props: {
    dialog: Boolean,
    data: Object,
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newData: {},
      rules: [v => !!v || 'Field is required'],
      quantityRules: [v => !!v || 'Field is required', v => v>0 || 'Sholud be grater than 0']
    }
  },
  created () {
    this.newData = Object.assign({}, this.data)
  },
  methods: {
    ...mapActions("Recipe", ["addNewRecipe", "editRecipe"]),
    async addIngredient() {
      this.newData.ingredients.push({
          id: Math.floor(Math.random() * 1000000),
          name: null,
          quantity: null
        })
    },
    removeIngredient(i) {
      this.newData.ingredients.splice(i, 1)
    },
    async submit() {
      if(this.isEdit) {
        await this.editRecipe(this.newData)
        notify("Edited item successfully", "positive")
      } else{
        this.newData.id = Math.floor(Math.random() * 10000000000)
        await this.addNewRecipe(this.newData)
        notify("Created item successfully", "positive")
      }
      this.$emit('close')
    },
  },
  computed: {
    handle: {
      get: function () {
          return this.dialog;
      },
      set: function (val) {
          this.$emit('close', val);
      }
    },
    title() {
      return this.isEdit? 'Edit recipe' : 'Create recipe'
    }
  },
}
</script>

<style lang="scss">
.add-recipe{
  width: 100%;
  max-width: 600px !important;
}
</style>
