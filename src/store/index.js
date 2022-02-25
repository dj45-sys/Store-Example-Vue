import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
  state: {
    books: []
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    }
  },
  actions: {
    getBook: ({ commit }) => {
      axios({
        url: "https://fakestoreapi.com/products?limit=20",
        method: "get"
      }).then((response) => commit("SET_BOOKS", response.data));
    }
  }
});
