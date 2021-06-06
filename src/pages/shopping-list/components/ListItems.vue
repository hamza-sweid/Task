<template>
  <div class="list row">
    <base-input class="col-4 q-px-md" :value="item.name" label="Name" readonly></base-input>
    <!-- popup edit -->
    <div class="cursor-pointer col-1">
      <base-input class=" q-pr-md" readonly :value="item.quantity" label="Quantity"></base-input>
      <q-popup-edit ref="popup" v-model="quantity" max-width="150px" content-class="bg-grey text-white">
        <template>
          <q-input dark color="white" v-model="quantity" dense autofocus counter>
            <template v-slot:after>
              <q-icon color="primary" class="cursor-pointer" icon="check_circle" @click="editQuantity" name="edit" />
            </template>
          </q-input>
        </template>
      </q-popup-edit>
    </div>
    <base-button class="q-mt-lg" round color="red" @click="removeIngr" icon="delete" size="sm"><q-tooltip>Delete ingredients</q-tooltip></base-button>
  </div>
</template>

<script>
export default {
  name: "ListItems",

  props: {
    item: {
      type: Object,
    },
  },

  data() {
    return {
      quantity: null,
    }
  },

  created () {
    this.quantity = this.item.quantity;
  },

  methods: {
    removeIngr() {
      this.$emit('remove-ingr', this.item.id)
    },
    editQuantity() {
      let data = {
        id: this.item.id,
        name: this.item.name,
        quantity: this.quantity
      }
      this.$emit('edit-quantity', data)
      this.$refs.popup.hide()
      this.quantity = this.item.quantity
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
