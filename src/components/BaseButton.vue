<template>
  <div>
    <q-btn
      @click="click"
      :loading="loading"
      :disable="disable"
      :type="type"
      :icon="icon"
      :color="color"
      no-caps
      :round="round"
      :size="size"
    >
      <slot></slot>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    color: {
      type: String
    },
    loading: {
      type: Boolean
    },
    disable: {
      type: Boolean
    },
    type: {
      type: String
    },
    icon: {
      type: String
    },
    round: {
      type: Boolean
    },
    size: {
      type: String
    }
  },

  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
</style>
