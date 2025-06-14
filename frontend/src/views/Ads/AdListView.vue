<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" lg="6">
          <h1 class="text--secondary mb-3 mt-3">My Ads</h1>
  
          <v-card v-for="ad in ads" :key="ad.id" class="mb-3" max-width="1000">
            <v-row>
              <!-- Блок с картинкой -->
              <v-col cols="4">
                <v-img :src="ad.src" height="175px" cover></v-img>
              </v-col>
  
              <!-- Блок с текстом и кнопкой -->
              <v-col cols="8">
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p style="height: 85px; overflow: hidden; text-overflow: ellipsis;">
                  {{ ad.desc }}
                </p>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
                    Open
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
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
            title: "First Ad",
            desc: "This is the first ad description.",
            promo: true,
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            id: "1"
          },
          {
            title: "Second Ad",
            desc: "This is the second ad description.",
            promo: false,
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            id: "2"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>

  </style>
  