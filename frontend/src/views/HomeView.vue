<template>
  <v-container>
    <!-- Карусель объявлений -->
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel>
          <v-carousel-item
            v-for="ad in promoAds"
            :key="ad.id"
            :src="ad.src"
            cover
            @error="onImageError(ad)"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
            <div class="ad-link">
              <v-btn class="error" :to="'/ad/' + ad.id">
                {{ ad.title }}
              </v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Grid объявлений -->
    <v-container grid-list-lg>
      <v-row wrap>
        <v-col
          v-for="ad in ads"
          :key="ad.id"
          :cols="12"
          :sm="6"
          :md="4"
        >
          <v-card>
            <v-img :src="ad.src" height="200px" @error="onImageError(ad)">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div>{{ ad.desc }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised color="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'; // Импорт mapGetters

export default {
  computed: {
    ...mapGetters('ads', ['promoAds', 'ads']) // Используем mapGetters с namespaced модулем
  },
  methods: {
    onImageError(ad) {
      console.error(`Failed to load image for ad: ${ad.title}, src: ${ad.src}`);
      ad.src = 'https://via.placeholder.com/200'; // Запасное изображение
    },
  },
};
</script>

<style scoped>
.ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>