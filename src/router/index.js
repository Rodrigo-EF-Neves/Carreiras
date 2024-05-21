import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue'; // Importa o componente Index
import Chat from '@/pages/chat.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Index }, // Página Index como a rota padrão
    { path: '/chat', component: Chat}
  ],
});

export default router;
