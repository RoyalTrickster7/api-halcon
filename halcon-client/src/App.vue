<template>
  <div id="app">
    <h1>Halcon Client</h1>
    <CreateOrder />
    <CheckOrderStatus />
  </div>
</template>

<script>
import CreateOrder from './components/CreateOrder.vue';
import CheckOrderStatus from './components/CheckOrderStatus.vue';

export default {
  components: {
    CreateOrder,
    CheckOrderStatus,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
