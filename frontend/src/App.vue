<template>
  <v-app>
    <!-- Боковое меню -->
    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-item-title class="title">КИПУ</v-list-item-title>
        <v-list-item-subtitle>Учебный проект</v-list-item-subtitle>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact">
        <v-list-item v-for="link in links" :key="link.title" :to="link.url" :prepend-icon="link.icon">
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <template v-slot:prepend>
            <v-icon icon="mdi-exit-to-app"></v-icon>
          </template>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Верхняя панель -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Ссылка на главную страницу -->
      <v-toolbar-title>
        <v-btn to="/" variant="text">Home</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Верхнее меню -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="link in links" :key="link.title" :to="link.url">
          <v-icon start :icon="link.icon"></v-icon>
          {{ link.title }}
        </v-btn>
        <v-btn @click="onLogout" v-if="isUserLoggedIn">
          <v-icon start icon="mdi-exit-to-app"></v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Основной контент -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Снекбар для отображения ошибок -->
    <v-snackbar
      v-model="showSnackbar"
      multi-line
      :timeout="2000"
      color="error"
    >
      {{ $store.getters.error }}
      <template v-slot:actions>
        <v-btn variant="text" @click="closeError">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      showSnackbar: false,
    };
  },
  computed: {
    isUserLoggedIn() {
      return true; //return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Orders', icon: 'mdi-bookmark-multiple-outline', url: '/orders' },
          { title: 'New ad', icon: 'mdi-note-plus-outline', url: '/new' },
          { title: 'My ads', icon: 'mdi-view-list-outline', url: '/list' },
        ];
      } else {
        return [
          { title: 'Login', icon: 'mdi-lock', url: '/login' },
          { title: 'Registration', icon: 'mdi-face', url: '/registration' },
        ];
      }
    },
  },
  watch: {
    '$store.getters.error'(newValue) {
      this.showSnackbar = !!newValue;
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError');
      this.showSnackbar = false;
    },
    onLogout() {
      this.$store.dispatch('logoutUser');
      this.$router.push('/');
    },
  },
};
</script>