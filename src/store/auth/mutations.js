export default {
  LOGIN(state, data) {
    state.userCredintials = data.value;
    localStorage.setItem("loginStatus", true);
    state.loginStatus = true;
  },

  LOGOUT(state) {
    state.userCredintials = {};
    state.loginStatus = false;
  }
};
