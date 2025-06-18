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
        <v-btn v-for="link in links" :key="link.title" :to="link.url" variant="text">
          <v-icon start>{{ link.icon }}</v-icon>
          {{ link.title }}
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
        <v-btn
          variant="text"
          @click="closeError"
        >
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
      links: [
        { title: 'Login', icon: 'mdi-lock', url: '/login' },
        { title: 'Registration', icon: 'mdi-face', url: '/registration' },
        { title: 'Orders', icon: 'mdi-bookmark-multiple-outline', url: '/orders' },
        { title: 'New ad', icon: 'mdi-note-plus-outline', url: '/new' },
        { title: 'My ads', icon: 'mdi-view-list-outline', url: '/list' },
      ],
    };
  },
  watch: {
    '$store.getters.error'(newValue) {
      this.showSnackbar = !!newValue; // Показывать снекбар, если ошибка не null
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError');
      this.showSnackbar = false;
    },
  },
};
</script>