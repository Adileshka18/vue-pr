<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="mt-5">
            <v-img :src="ad?.src" height="400px"></v-img>
  
            <v-card-text>
              <h1 class="text--primary mb-3">{{ ad?.title }}</h1>
              <p>{{ ad?.desc }}</p>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text class="warning">Edit</v-btn>
              <v-btn class="success">Buy</v-btn>
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
        ad: null,
      };
    },
    created() {
      const ads = [
        {
          id: "1",
          title: "First Ad",
          desc: "A curious squirrel sits on a tree branch, attentively observing its surroundings. Its fluffy tail is curled up, and its fur glows in the soft sunlight. The background consists of blurred green foliage, creating a peaceful forest atmosphere.",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          id: "2",
          title: "Second Ad",
          desc: "A breathtaking view of the vast sky during sunset. The clouds are painted in shades of pink, orange, and purple, blending into the endless blue. The last rays of sunlight reflect on the horizon, creating a mesmerizing scene of nature’s beauty",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          id: "3",
          title: "Third Ad",
          desc: "A tiny bird with vibrant feathers perches delicately on a thin branch. It tilts its head slightly as if listening to the sounds of nature. The surrounding green leaves add to the serene and lively atmosphere of this peaceful moment in the wild.",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          id: "4",
          title: "Fourth Ad",
          desc: "A stunning cosmic scene featuring a massive planet floating in the darkness of space. Its surface is illuminated by a distant star, revealing intricate details of its atmosphere. Surrounding it are scattered stars and celestial bodies, adding to the vastness of the universe.",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ];
  
      const adId = this.$route.params.id;
      this.ad = ads.find((a) => a.id === adId) || null;
    },
  };
  </script>
  