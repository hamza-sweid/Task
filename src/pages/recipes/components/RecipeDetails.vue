<template>
  <q-dialog v-model="handle">
    <q-card class="show-recipe">
      <q-card-section>
        <div class="text-h6">Recipe: {{data.name}}</div>
      </q-card-section>
        <q-card-section class="q-pt-none row">
          <base-input class="col-sm-6 q-mb-md col-12 q-pa-sm" :value="data.name" readonly label="Name" />
          <base-input class="col-sm-6 q-my-sm col-12 q-pa-sm" :value="data.image" readonly label="Image URL" />
          <base-input class="col-12 q-pa-sm" type="textarea" :value="data.description" readonly label="Description" />
          <!-- ingredients -->
          <div class="col-sm-12 q-my-sm row" v-for="(item, i) in data.ingredients" :key="i">
            <p class="text-h6 text-blue col-12">Ingredient {{i+1}}</p>
            <base-input
              class="col-sm-6 col-xs-12 q-px-sm"
              label="Name"
              readonly
              :value="item.name"
            >
            </base-input>
            <base-input
              class="col-sm-6 col-xs-12 q-px-sm"
              label="Quantity"
              readonly
              :value="item.quantity"
            >
            </base-input>
          </div>
        </q-card-section>
        <!-- actions -->
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn color="grey-6 q-px-sm" label="Cancel" @click="$emit('close')" />
        </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "RecipeDetails",
  props: {
    dialog: Boolean,
    data: Object,
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
  },
}
</script>

<style lang="scss">
.show-recipe{
  width: 100%;
  max-width: 600px !important;
}
</style>
