<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8" offset="2">
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
            name="title"
            label="Ad Title"
            type="text"
            v-model="title"
            :rules="[(v) => !!v || 'Title is required']"
          ></v-text-field>

          <v-textarea
            name="description"
            label="Ad Description"
            type="text"
            v-model="description"
            :rules="[(v) => !!v || 'Description is required']"
            class="mb-3"
          ></v-textarea>
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8" offset="2">
        <v-btn class="mt-3" color="warning">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8" offset="2">
        <img
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          height="150"
          class="mt-3"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8" offset="2">
        <v-switch v-model="promo" label="Ad to Promo?"></v-switch>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8" offset="2">
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          @click="createAd"
          :loading="loading"
          :disabled="!valid || loading"
        >
          Create Ad
        </v-btn>
      </v-col>
    </v-row>

    <!-- Отображение ошибки, если она есть -->
    <v-row v-if="error" class="mt-3">
      <v-col cols="8" offset="2">
        <v-alert type="error">{{ error }}</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      title: "",
      description: "",
      promo: true
    };
  },
  computed: {
    loading() {
      return this.$store.getters['shared/loading']; // Подключение лоудера из shared модуля
    },
    error() {
      return this.$store.getters['shared/error']; // Отображение ошибки из shared модуля
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          desc: this.description,
          promo: this.promo,
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
        };
        this.$store.dispatch("ads/createAd", ad) // Используем namespaced путь
          .then(() => {
            console.log('Ad created:', ad);
            this.$router.push("/list"); // Редирект на /list при успехе
          })
          .catch((error) => {
            console.error('Error creating ad:', error.message);
            // Ошибка уже устанавливается в store через setError, отображается через computed.error
          });
      }
    }
  }
};
</script>