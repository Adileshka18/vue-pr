<template>
  <v-container>
    <!-- Карусель объявлений -->
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel>
          <v-carousel-item
            v-for="ad in ads"
            :key="ad.id"
            :src="ad.src"
            cover
          >
            <v-sheet height="100%" class="d-flex flex-column align-center justify-center">
              <h3 class="text-h5 font-weight-bold white--text">{{ ad.title }}</h3>
              <p class="text-subtitle-1 white--text">{{ ad.desc }}</p>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>

  <!-- Grid объявлений -->
  <v-container>
    <v-row>
      <v-col v-for="ad in ads" :key="ad.id" cols="12" sm="6" md="4">
        <v-card>
          <v-img :src="ad.src" height="200px"></v-img>
          <v-card-title>
            <h3 class="headline mb-0">{{ ad.title }}</h3>
          </v-card-title>
          <v-card-subtitle>
            {{ ad.desc }}
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text>Open</v-btn>
            <v-btn color="primary">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First",
          desc: "First Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1"
        },
        {
          title: "Second",
          desc: "Second Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2"
        },
        {
          title: "Third",
          desc: "Third Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3"
        },
        {
          title: "Fourth",
          desc: "Fourth Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "4"
        }
      ]
    };
  }
};
</script>