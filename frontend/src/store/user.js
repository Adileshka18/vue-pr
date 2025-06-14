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
      registerUser({ commit }, { email, password }) {
        commit('clearError');
        commit('setLoading', true);
  
        // Временная логика, чтобы избежать ошибки ESLint
        console.log(new User('temp-id', email, password));
  
        /*fb.auth()
          .createUserWithEmailAndPassword(email, password)
          .then((response) => {
            const user = new User(response.user.uid, email, password);
            commit('setUser', user);
            commit('setLoading', false);
          })
          .catch((error) => {
            commit('setLoading', false);
            commit('setError', error.message);
            throw error;
          });*/
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
    },
  };