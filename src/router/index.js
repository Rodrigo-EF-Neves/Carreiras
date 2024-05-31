import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue'; // Importa o componente Index
import Chat from '@/pages/chat.vue';
import Login from '@/components/login/Login.vue';
import EntrarEmpresaOuCandidato from '@/components/EntrarEmpresaOuCandidato.vue';
import AgendaCandidato from '@/components/AgendaCandidato.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Index }, // Página Index como a rota padrão
    { path: '/chat', component: Chat},
    { path: '/login', component: Login},
    { path: '/empresa_candidato', component: EntrarEmpresaOuCandidato},
    { path: '/agendaC', component: AgendaCandidato}
  ],
});

export default router;
