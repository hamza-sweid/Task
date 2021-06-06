export default {
  async setItem(key, value) {
    await Promise.resolve();
    localStorage.setItem(key, JSON.stringify(value));
  },

  async getItem(key) {
    await Promise.resolve();
    return JSON.parse(localStorage.getItem(key));
  },

  async deleteUser() {
    await Promise.resolve();
    localStorage.removeItem("currentUser")
    localStorage.removeItem("loginStatus")
  }
};
