<template>
  <div>
    <q-dialog v-model="dialog" @keydown.esc="$emit('close')">
      <q-card>
        <q-card-section>
          <div class="text-h6">Are you sure you want to delete it?</div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn color="grey-6" flat label="Cancel" @click="$emit('close')" />
          <q-btn color="red" label="Delete" @click="submitDelete" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "ConfirmDelete",
  props: {
    confirmDelete: {
      type: Boolean,
    },
    id: {
      type: [String, Number]
    }
  },
  methods: {
    submitDelete() {
      this.$emit('submit-delete', this.id)
    },
  },
  computed: {
    dialog: {
      get: function () {
          return this.confirmDelete;
      },
      set: function (val) {
          this.$emit('close', val);
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
