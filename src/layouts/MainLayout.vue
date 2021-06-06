<template>
  <q-layout>
    <q-header elevated>
      <div class="row justify-between q-pa-sm q-mt-sm">
        <div class="row q-gutter-x-lg">
          <div class="clk text-h6" v-for="(item, i) in navItems" :key="i" @click="$router.push(item.path)">
            <p class="" :class="isActive(item)? 'acitve' : 'not-active'">{{item.name}}</p>
          </div>
        </div>
        <div @click="doLogout" class="text-h6 clk">Log out</div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import navItems from "./navItems"
import {mapActions} from "vuex"

export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navItems: navItems,
    }
  },

  methods: {
    ...mapActions("Auth", ["logout"]),
    isActive(item) {
      return this.$route.path === item.path;
    },
    async doLogout() {
      await this.logout()
      this.$router.push("login")
    }
  },
}
</script>

<style lang="scss">
.q-layout{
  .not-active{
    color: #d0d0d0;
  }
  .active{
    color: white
  }
  .clk {
    cursor: pointer;
  }
}
</style>
