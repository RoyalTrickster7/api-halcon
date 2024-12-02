<template>
  <div>
    <h2>Crear Pedido</h2>
    <form @submit.prevent="createOrder">
      <div>
        <label for="customerName">Nombre del Cliente:</label>
        <input type="text" v-model="customerName" required />
      </div>
      <div>
        <label for="productDetails">Detalles del Producto:</label>
        <input type="text" v-model="productDetails" required />
      </div>
      <div>
        <label for="quantity">Cantidad:</label>
        <input type="number" v-model="quantity" min="1" required />
      </div>
      <button type="submit">Crear Pedido</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      customerName: '',
      productDetails: '',
      quantity: 1,
    };
  },
  methods: {
    async createOrder() {
      try {
        const response = await axios.post('http://localhost:8000/orders', {
          customer_name: this.customerName,
          product_details: this.productDetails,
          quantity: this.quantity,
        });
        alert('Pedido creado exitosamente');
        console.log(response.data);
        // Resetear campos del formulario
        this.customerName = '';
        this.productDetails = '';
        this.quantity = 1;
      } catch (error) {
        console.error('Error creando el pedido:', error);
        alert('Hubo un error creando el pedido.');
      }
    },
  },
};
</script>
