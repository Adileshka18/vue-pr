<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card v-if="ad" class="mt-5">
            <v-img v-if="ad.src" height="400px" :src="ad.src" cover></v-img>
            <v-card-text>
              <h1 class="text--primary mb-3">{{ ad.title }}</h1>
              <p>{{ ad.desc }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="warning">Edit</v-btn>
              <v-btn class="success">Buy</v-btn>
            </v-card-actions>
          </v-card>
          <v-alert v-else type="error" class="mt-5">
            Ad not found.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ad: null, // Убираем ошибку "Cannot read properties of undefined"
      };
    },
    created() {
      // Имитируем загрузку объявления (например, получаем ID из маршрута)
      const ads = [
  {
    id: "1",
    title: "First Ad",
    desc: "First description",
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    id: "2",
    title: "Second Ad",
    desc: "Second description",
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    id: "3",
    title: "Third Ad",
    desc: "Third description",
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    id: "4",
    title: "Fourth Ad",
    desc: "Fourth description",
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];

const adId = this.$route.params.id;
this.ad = ads.find((a) => a.id === adId) || null;

    },
  };
  </script>
  