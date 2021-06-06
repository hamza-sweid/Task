export default {

  SET_INGR(state, data) {
    state.ingredients.push(...data);
  },

  REMOVE_INGR(state, id) {
    state.ingredients = state.ingredients.filter(item => item.id != id);
  },

  CLEAR_INGR(state) {
    state.ingredients = [];
  },

  EDIT_QUANTITY(state, data) {
    state.ingredients = state.ingredients.filter(e => e.id != data.id)
    state.ingredients.push(data);
  }

};
