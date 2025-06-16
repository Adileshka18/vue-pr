export default {
  state: {
    ads: [
      {
        title: "First",
        desc: "First Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "1",
        userId: "1" // Добавлено поле userId
      },
      {
        title: "Second",
        desc: "Second Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        id: "2",
        userId: "1" // Добавлено поле userId
      },
      {
        title: "Third",
        desc: "Third Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "3",
        userId: "1" // Добавлено поле userId
      },
      {
        title: "Fourth",
        desc: "Fourth Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        id: "4",
        userId: "1" // Добавлено поле userId
      }
    ]
  },
  mutations: {
    addAd(state, ad) {
      // Добавляем userId, если он не передан (берем из текущего пользователя или дефолтное значение)
      const userId = ad.userId || (this.state.user && this.state.user.user && this.state.user.user.id) || "1";
      state.ads.push({ ...ad, id: Date.now().toString(), userId }); // Генерируем уникальный ID и добавляем userId
    }
  },
  actions: {
    createAd({ commit, rootState }, ad) {
      // Передаем ad с возможным userId, если он есть в форме, или берем из текущего пользователя
      const userId = ad.userId || (rootState.user && rootState.user.user && rootState.user.user.id) || "1";
      commit('addAd', { ...ad, userId });
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
    }
  }
};