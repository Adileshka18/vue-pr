<template>
  <v-app>
    <!-- Боковое меню -->
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            КИПУ
          </v-list-item-title>
          <v-list-item-subtitle>
            Учебный проект
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <template v-slot:prepend>
            <v-icon :icon="link.icon"></v-icon>
          </template>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Верхняя панель -->
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          text
        >
          <v-icon
            start
            :icon="link.icon"
          ></v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Основной контент с роутером -->
    <v-main>
      <router-view></router-view> 
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, 
      links: [
        { title: "Home", icon: "mdi-home", url: "/" },
        { title: "Ads List", icon: "mdi-view-list", url: "/list" },
        { title: "New Ad", icon: "mdi-note-plus-outline", url: "/new" },
        { title: "Login", icon: "mdi-lock", url: "/login" },
        { title: "Registration", icon: "mdi-account-plus", url: "/registration" },
        { title: "My Orders", icon: "mdi-cart", url: "/orders" }
      ]
    };
  }
};
</script>

<style scoped>

</style>