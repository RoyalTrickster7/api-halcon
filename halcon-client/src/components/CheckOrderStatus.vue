<template>
  <div>
    <h2>Consultar Estado del Pedido</h2>
    <form @submit.prevent="checkOrderStatus">
      <div>
        <label for="customerName">Nombre del Cliente:</label>
        <input type="text" v-model="customerName" required />
      </div>
      <div>
        <label for="orderId">ID del Pedido:</label>
        <input type="text" v-model="orderId" required />
      </div>
      <button type="submit">Consultar Estado</button>
    </form>

    <div v-if="orderStatus">
      <h3>Estado del Pedido:</h3>
      <p>{{ orderStatus }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      customerName: '',
      orderId: '',
      orderStatus: null,
    };
  },
  methods: {
    async checkOrderStatus() {
      try {
        const response = await axios.get('http://localhost:8000/orders/status', {
          params: {
            customer_name: this.customerName,
            order_id: this.orderId,
          },
        });
        this.orderStatus = response.data.status;
      } catch (error) {
        console.error('Error consultando el estado del pedido:', error);
        alert('Hubo un error consultando el estado del pedido.');
      }
    },
  },
};
</script>
