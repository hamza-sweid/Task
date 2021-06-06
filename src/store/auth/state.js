export default {
  userCredintials: {},
  loginStatus: localStorage.getItem("loginStatus")
    ? JSON.parse(localStorage.getItem("loginStatus"))
    : false
};
