<template>
  <q-input
    class="q-my-sm"
    v-bind:value="value"
    clearable
    @input="$emit('input', $event)"
    outlined
    :type="type"
    :label="label"
    :rules="rules"
    :disable="disable"
    :loading="loading"
    :readonly="readonly"
    ref="input"
    ><template v-slot:append> <slot></slot> </template
  ></q-input>
</template>

<script>
export default {
  name: "BaseInput",

  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      default: "Standard"
    },
    type: {
      type: String,
      default: "text"
    },
    rules: {
      type: Array
    },
    disable: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    }
  },

  methods: {
    validate(...args) {
      return this.$refs.input.validate(...args);
    }
  }
};
</script>

<style lang="scss">
</style>
