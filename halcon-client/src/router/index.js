import { createRouter, createWebHistory } from 'vue-router';
import CreateOrder from '../components/CreateOrder.vue';
import CheckOrderStatus from '../components/CheckOrderStatus.vue';

const routes = [
  { path: '/create-order', component: CreateOrder },
  { path: '/check-order-status', component: CheckOrderStatus },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
