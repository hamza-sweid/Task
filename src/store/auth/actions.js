import localStorageService from "../../services/localStorage.service";

export default {

  async signup({ commit, dispatch }, data) {
    let users = await localStorageService.getItem("users");
    if (!users) {
      await localStorageService.setItem("users", [])
      users = []
    }
    users.push(data.value)
    localStorageService.setItem("users", users);
    dispatch("login", {key: "currentUser", value: data.value})
  },

  async login({ commit }, data) {
    await localStorageService.setItem(data.key, data.value);
    commit("LOGIN", data);
  },

  async logout({ commit }) {
    await localStorageService.deleteUser();
    commit("LOGOUT");
  }
};
