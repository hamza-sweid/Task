<template>
  <div class="login flex flex-center q-py-xl">
    <div class="cover text-center">
      <q-form @submit="signin" class="q-pa-lg">
        <div class="row">
          <div class="col-12">
            <img src="~/assets/quasar-logo-vertical.svg" width="100px" />
            <span class="block text-h6">Log in</span>
          </div>
        </div>
        <div class="row q-my-lg">
          <base-input class="col-12" v-model="user.email" label="Email" type="email" :rules="emailRules"></base-input>
          <base-input class="col-12" v-model="user.password" label="Password" type="password" :rules="passwordRules"></base-input>
        </div>
        <base-button color="primary" :loading="isLoading" type="submit">Log in</base-button>
      </q-form>
      <div>
        <span class="q-px-md">Don't have an account!</span>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import localStorageService from "../../../services/localStorage.service"
import {notify} from "../../../utils/notify"
export default {
  data: () => ({
    emailRules: [ v => !!v || 'Email is required', v => /.+@.+/.test(v) || "Email is not valid" ],
    passwordRules: [v => !!v || 'Password is required', v => v.length >=8 || "Should be 8 chars or more"],
    user: {},
    isLoading: false
  }),
  methods: {
    ...mapActions("Auth", ["login"]),
    async signin() {
      this.isLoading = true
      //check if user has account or not
      let users = await localStorageService.getItem("users")
      let user = users? users.filter(user => user.email == this.user.email) : users = []
      if (user.length == 0) {notify("User not found", "negative"); return this.isLoading = false}

      await this.login({
        key: "currentUser",
        value: this.user
      });
      notify("Login successfully", "positive");
      this.isLoading = false;
      setTimeout(() => {
        this.$router.push("/recipe");
      }, 1500);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  .cover {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    width: 400px;
    padding: 20px 10px;
  }
  a{
    text-decoration: none;
  }
}
</style>
