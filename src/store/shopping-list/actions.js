export default {

  addIngr({ commit }, data) {
    commit("SET_INGR", data);
  },

  deleteIngr({ commit }, id) {
    commit("REMOVE_INGR", id);
  },

  resetIngr({ commit }) {
    commit("CLEAR_INGR");
  },

  updateQuantity({commit}, data) {
    commit("EDIT_QUANTITY", data)
  }
};
