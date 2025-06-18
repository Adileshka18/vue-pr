<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="uyorum2" md="8">
        <v-card class="mt-5 pa-4">
          <v-img :src="ad.src" height="300px" class="rounded-lg"></v-img>
          <v-card-text class="text-center">
            <h1 class="text-h4 font-weight-bold mb-3">{{ ad.title }}</h1>
            <p class="text-body-1 text--secondary">{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions class="justify-end">
            <modal-dialog :ad="ad" v-if="isOwner"></modal-dialog>
            <v-btn color="success" class="ml-2">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal';

export default {
  props: ['id'],
  computed: {
    ad() {
      return this.$store.getters.adById(this.id) || {};
    },
    isOwner() {
      return true; //return this.ad && this.$store.getters.user && this.ad.userId === this.$store.getters.user.id;
    },
  },
  components: {
    'modal-dialog': EditAdModal,
  },
};
</script>

<style scoped>
.text--secondary {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}
</style>