import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import TipoCadastro from '@/pages/tipoCadastro.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Index }, 
    { path: '/tipo_cadastro', component: TipoCadastro}
  ],
});

export default router;