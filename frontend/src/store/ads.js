export default {
  state: {
    ads: [
      {
        title: "First",
        desc: "First Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "1",
        userId: "1"
      },
      {
        title: "Second",
        desc: "Second Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        id: "2",
        userId: "1"
      },
      {
        title: "Third",
        desc: "Third Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "3",
        userId: "1"
      },
      {
        title: "Fourth",
        desc: "Fourth Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        id: "4",
        userId: "1"
      }
    ]
  },
  mutations: {
    addAd(state, ad) {
      const userId = ad.userId || (this.state.user && this.state.user.user && this.state.user.user.id) || "1";
      state.ads.push({ ...ad, id: Date.now().toString(), userId }); // Генерируем уникальный ID и добавляем userId
    }
  },
  actions: {
    async createAd({ commit, rootGetters }, payload) {
      // 1) Добавляем userId залогиненного пользователя
      payload.id = Math.random().toString(); // Генерируем случайный ID
      payload.userId = rootGetters['user/user'] ? rootGetters['user/user'].id : '1'; // Берем userId из залогиненного пользователя

      // 2) Имитация запроса на сервер
      commit('shared/clearError', null, { root: true }); // Очищаем ошибки
      commit('shared/setLoading', true, { root: true }); // Устанавливаем загрузку

      let isRequestOk = true; // Заглушка для имитации успешного/неуспешного запроса
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000); // Имитация задержки 3 секунды
      });

      try {
        if (isRequestOk) {
          await promise.then(() => {
            commit('addAd', payload); // Вызываем мутацию addAd
            commit('shared/setLoading', false, { root: true }); // Снимаем загрузку
          });
        } else {
          await promise.then(() => {
            commit('shared/setLoading', false, { root: true }); // Снимаем загрузку
            commit('shared/setError', 'Ошибка создания объявления', { root: true }); // Устанавливаем ошибку
            throw new Error('Упс... Ошибка создания объявления');
          });
        }
      } catch (error) {
        console.error('Create Ad error:', error.message);
        throw error; // Передаем ошибку дальше для обработки в компоненте
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    adById: (state) => (id) => {
      return state.ads.find(ad => ad.id === id) || null; // Возвращаем null, если не найдено
    },
    myAds(state, getters, rootState, rootGetters) {
      const user = rootGetters['user/user']; // Получаем текущего пользователя
      const userId = user ? user.id : null;
      return state.ads.filter(ad => ad.userId === userId); // Фильтруем объявления по userId
    }
  }
};