<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text--secondary mb-3 mt-3">My Orders</h1>
        <v-card v-for="order in orders" :key="order.id" class="mb-3">
          <v-card-text>
            <p><strong>Name:</strong> {{ order.name }}</p>
            <p><strong>Phone:</strong> {{ order.phone }}</p>
            <p><strong>Ad ID:</strong> {{ order.adId }}</p>
            <p><strong>Status:</strong> {{ order.done ? 'Completed' : 'Pending' }}</p>
          </v-card-text>
        </v-card>
        <p v-if="orders.length === 0">No orders yet.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
  },
};
</script>