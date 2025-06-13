<template>
  <v-container>
    <!-- Карусель -->
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel>
          <v-carousel-item
            v-for="(item, index) in carouselItems"
            :key="index"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>

  <!-- Grid с карточками продуктов -->
  <v-container>
    <v-row>
      <v-col v-for="(product, index) in products" :key="index" cols="12" sm="6" md="4">
        <v-card>
          <v-img :src="product.image" height="200px"></v-img>
          <v-card-title>
            <h3 class="headline mb-0">{{ product.title }}</h3>
          </v-card-title>
          <v-card-subtitle>
            {{ product.description }}
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
      carouselItems: [
        { src: "https://via.placeholder.com/800x400?text=Slide+1" },
        { src: "https://via.placeholder.com/800x400?text=Slide+2" },
        { src: "https://via.placeholder.com/800x400?text=Slide+3" }
      ],
      products: [
        {
          title: "Продукт 1",
          description: "Описание продукта 1",
          image: "https://picsum.photos/800/400"
        },
        {
          title: "Продукт 2",
          description: "Описание продукта 2",
          image: "https://via.placeholder.com/400x200"
        },
        {
          title: "Продукт 3",
          description: "Описание продукта 3",
          image: "https://via.placeholder.com/400x200"
        }
      ]
    };
  }
};
</script>