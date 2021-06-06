export default {
  ADD_RECIPE(state, data) {
    state.recipes.push(data);
  },

  EDIT_RECIPE(state, data) {
    let item = state.recipes.filter(e => e.id == data.id)[0]
    Object.assign(item, data)
  },

  DELETE_RECIPE(state, id) {
    state.recipes = state.recipes.filter(item => item.id != id);
  }
};
