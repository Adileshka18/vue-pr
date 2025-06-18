export default {
  state: {
    ads: [
      {
        title: 'First',
        desc: 'A curious squirrel sits on a tree branch, attentively observing its surroundings. Its fluffy tail is curled up, and its fur glows in the soft sunlight. The background consists of blurred green foliage, creating a peaceful forest atmosphere',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1',
        userId: '1',
      },
      {
        title: 'Second',
        desc: 'A breathtaking view of the vast sky during sunset. The clouds are painted in shades of pink, orange, and purple, blending into the endless blue. The last rays of sunlight reflect on the horizon, creating a mesmerizing scene of nature’s beauty.',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '2',
        userId: '1',
      },
      {
        title: 'Third',
        desc: 'A tiny bird with vibrant feathers perches delicately on a thin branch. It tilts its head slightly as if listening to the sounds of nature. The surrounding green leaves add to the serene and lively atmosphere of this peaceful moment in the wild.',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3',
        userId: '1',
      },
      {
        title: 'Fourth',
        desc: 'A stunning cosmic scene featuring a massive planet floating in the darkness of space. Its surface is illuminated by a distant star, revealing intricate details of its atmosphere. Surrounding it are scattered stars and celestial bodies, adding to the vastness of the universe.',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '4',
        userId: '1',
      },
    ],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    },
    updateAd(state, { title, desc, id }) {
      const ad = state.ads.find(a => a.id === id);
      ad.title = title;
      ad.desc = desc;
    },
  },
  actions: {
    async createAd({ commit, getters }, payload) {
      payload.id = Math.random().toString();
      payload.userId = getters.user != null ? getters.user.id : '1';

      commit('clearError');
      commit('setLoading', true);

      let isRequestOk = true;
      let promise = new Promise(function (resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });

      if (isRequestOk) {
        await promise.then(() => {
          commit('createAd', payload);
          commit('setLoading', false);
        });
      } else {
        await promise.then(() => {
          commit('setLoading', false);
          commit('setError', 'Ошибка создания объявления');
          throw 'Упс... Ошибка создания объявления';
        });
      }
    },
    async updateAd({ commit }, { title, desc, id }) {
      commit('clearError');
      commit('setLoading', true);

      let isRequestOk = true;
      let promise = new Promise(function (resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });

      if (isRequestOk) {
        await promise.then(() => {
          commit('updateAd', { title, desc, id });
          commit('setLoading', false);
        });
      } else {
        await promise.then(() => {
          commit('setLoading', false);
          commit('setError', 'Ошибка редактирования объявления');
          throw 'Упс... Ошибка редактирования объявления';
        });
      }
    },
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    myAds(state, getters) {
      return state.ads.filter(ad => ad.userId === getters.user.id);
    },
    adById: state => id => {
      return state.ads.find(ad => ad.id === id) || null;
    },
  },
};