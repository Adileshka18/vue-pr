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
        //Здесь выполняется запрос на сервер
        let isRequestOk = false
        let promise = new Promise(function(resolve) {
            setTimeout(() => resolve('Done'),3000);
        });

        if (isRequestOk) {
            await promise.then(()=> {
                commit('setUser', new User(1, email, password))
                commit('setLoading', false)
            })
        } else {
            await promise.then(()=> {
                commit('setLoading', false)
                commit('setError', 'Ошибка регистрации')
                throw 'Упс... Ошибка регистрации'
            })
        }
    

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