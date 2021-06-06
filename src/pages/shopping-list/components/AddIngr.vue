<template>
  <div>
    <q-dialog v-model="handle" persistent>
      <q-card class="add-ingr">
        <q-card-section>
          <div class="text-h6">Add ingredient</div>
        </q-card-section>
        <q-form
        :greedy="true"
        @submit="submit"
        >
          <base-input label="Name" :rules="rules" v-model="data.name"></base-input>
          <base-input label="Quantity" type="number" :rules="rules" v-model="data.quantity"></base-input>
          <q-card-actions align="right" class="q-gutter-x-md">
            <base-button color="grey-6" @click="$emit('close')">Cancel</base-button>
            <base-button color="primary" label="Apply" type="submit">Submit</base-button>
          </q-card-actions>
      </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import {notify} from "../../../utils/notify"

export default {
  name: "AddIngr",

  props:{
    dialog: Boolean,
  },

  data() {
    return {
      data: {},
      rules: [v => !!v || 'Filed is required']
    }
  },

  methods: {
    ...mapActions("ShoppingList", ["addIngr"]),
    async submit() {
      this.data.id = Math.floor(Math.random() * 1000000)
      await this.addIngr([this.data])
      notify("Added item successfully", "positive")
      this.$emit('close')
    }
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
};
</script>

<style lang="scss" scoped>
.add-ingr{
  width: 400px;
  padding: 0 20px
}
</style>
