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
      loading: false,
      error: null,
    },
    mutations: {
      setUser(state, payload) {
        console.log(payload);
        state.user = payload;
      },
      clearError(state) {
        state.error = null;
      },
      setLoading(state, payload) {
        state.loading = payload;
      },
      setError(state, payload) {
        state.error = payload;
      },
    },
    actions: {
      async registerUser({ commit }, { email, password }) {
        commit('clearError');
        commit('setLoading', true);
  
        try {
          // Имитация запроса на сервер
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              const isRequestOk = Math.random() > 0.5; 
              if (isRequestOk) {
                resolve();
              } else {
                reject(new Error('Ошибка регистрации'));
              }
            }, 3000); 
          });
  
          // Если запрос успешен
          commit('setUser', new User(1, email, password));
          commit('setLoading', false);
        } catch (error) {
          // Если запрос неудачен
          commit('setLoading', false);
          commit('setError', error.message);
          throw error;
        }
      },
  
      async loginUser({ commit }, { email, password }) {
        commit('clearError');
        commit('setLoading', true);
  
        try {
          // Имитация запроса на сервер
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              const isRequestOk = Math.random() > 0.5; 
              if (isRequestOk) {
                resolve();
              } else {
                reject(new Error('Ошибка логина или пароля'));
              }
            }, 3000); 
          });
  
          // Если запрос успешен
          commit('setUser', new User(1, email, password));
          commit('setLoading', false);
        } catch (error) {
          // Если запрос неудачен
          commit('setLoading', false);
          commit('setError', error.message);
          throw error;
        }
      },
    },
    getters: {
      user(state) {
        return state.user;
      },
      loading(state) {
        return state.loading;
      },
      error(state) {
        return state.error;
      },
      isUserLoggedIn (state) {
        return state.user !== null
      },
    },
  };