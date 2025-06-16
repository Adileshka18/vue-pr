import { createStore } from 'vuex';
import ads from './ads';
import user from './user';
import shared from './shared';

const store = createStore({
  modules: {
    ads: {
      namespaced: true,
      ...ads,
    },
    user: {
      namespaced: true,
      ...user,
    },
    shared: {
      namespaced: true,
      ...shared,
    },
  },
  // Выполняем инициализацию при создании магазина
  actions: {
    initializeStore({ dispatch }) {
      dispatch('user/initializeUser');
    },
  },
});

// Инициализация при старте
store.dispatch('initializeStore');

export default store;