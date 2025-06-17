<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5" v-if="ad">
          <v-img
            height="400px"
            :src="ad.src"
            cover
            @error="onImageError"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-text>
            <h1 class="text--primary mb-3">{{ ad.title }}</h1>
            <p>{{ ad.desc }}</p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <modal-dialog :ad="ad"></modal-dialog>
            <v-btn class="success" color="green">Buy</v-btn>
          </v-card-actions>
        </v-card>
        <v-alert v-else type="error" class="mt-3">
          No ad found for ID: {{ $route.params.id }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'; // Импорт mapGetters
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ...mapGetters('ads', ['adById']), // Подключение геттера из модуля ads
    ad() {
      const id = this.id
      console.log('Fetching ad with id:', id); // Отладка
      const ad = this.adById(id); // Вызываем геттер как функцию
      console.log('Ad data:', ad); // Отладка
      return ad
    }
  },
  methods: {
    onImageError() {
      if (this.ad) {
        console.error(`Failed to load image for ad: ${this.ad.title}, src: ${this.ad.src}`);
        this.ad.src = 'https://via.placeholder.com/400'; // Запасное изображение
      } else {
        console.error('No ad data available to update image');
      }
    }
  },
  components: {
    'modal-dialog': EditAdModal
  }
};
</script>