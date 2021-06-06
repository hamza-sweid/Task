export default {
  addNewRecipe({ commit }, data) {
    commit("ADD_RECIPE", data);
  },

  editRecipe({ commit }, data) {
    commit("EDIT_RECIPE", data);
  },

  deleteRecipe({ commit }, id) {
    commit("DELETE_RECIPE", id);
  },
};
