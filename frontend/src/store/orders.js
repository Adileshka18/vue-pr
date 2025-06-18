export default {
  state: {
    orders: [],
  },
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload);
    },
  },
  actions: {
    async createOrder({ commit }, { name, phone, adId, userId }) {
      commit('clearError');
      commit('setLoading', true);

      let isRequestOk = true;
      let promise = new Promise(function (resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });

      if (isRequestOk) {
        await promise.then(() => {
          commit('createOrder', {
            id: Math.random().toString(),
            name,
            phone,
            adId,
            userId,
            done: false,
          });
          commit('setLoading', false);
        });
      } else {
        await promise.then(() => {
          commit('setLoading', false);
          commit('setError', 'Ошибка создания заказа');
          throw 'Упс... Ошибка создания заказа';
        });
      }
    },
  },
  getters: {},
};