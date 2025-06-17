class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      console.log('Setting user:', payload);
      state.user = payload;
    },
  },
  actions: {
    // Инициализация пользователя из localStorage при старте
    initializeUser({ commit }) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        commit('setUser', new User(storedUser.id, storedUser.email, storedUser.password));
      }
    },

    async registerUser({ commit }, { email, password }) {
      commit('shared/clearError', null, { root: true }); // Добавлен { root: true }
      commit('shared/setLoading', true, { root: true }); // Добавлен { root: true }

      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (email && password) {
              resolve();
            } else {
              reject(new Error('Заполните email и пароль'));
            }
          }, 3000);
        });

        const newUser = new User(Date.now(), email, password);
        commit('setUser', newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        commit('shared/setLoading', false, { root: true }); // Добавлен { root: true }
        return Promise.resolve(newUser);
      } catch (error) {
        commit('shared/setLoading', false, { root: true }); // Добавлен { root: true }
        commit('shared/setError', error.message, { root: true }); // Добавлен { root: true }
        throw error;
      }
    },

    async loginUser({ commit }, { email, password }) {
      commit('shared/clearError', null, { root: true }); // Добавлен { root: true }
      commit('shared/setLoading', true, { root: true }); // Добавлен { root: true }

      try {
        let storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
          // Если пользователя нет в localStorage, создаём нового для теста
          storedUser = new User(Date.now(), email, password);
          localStorage.setItem('user', JSON.stringify(storedUser));
        }
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (storedUser.email === email && storedUser.password === password) {
              resolve();
            } else {
              reject(new Error('Неверный email или пароль'));
            }
          }, 3000);
        });

        commit('setUser', storedUser);
        commit('shared/setLoading', false, { root: true }); // Добавлен { root: true }
        return Promise.resolve();
      } catch (error) {
        commit('shared/setLoading', false, { root: true }); // Добавлен { root: true }
        commit('shared/setError', error.message, { root: true }); // Добавлен { root: true }
        throw error;
      }
    },

    logoutUser({ commit }) {
      commit('setUser', null);
      localStorage.removeItem('user');
      commit('shared/clearError', null, { root: true }); // Добавлен { root: true }
      return Promise.resolve();
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.user !== null;
    },
  },
};