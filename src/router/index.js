import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue'; // Importa o componente Index
import Chat from '@/pages/chat.vue';
import Login from '@/components/login/Login.vue';
import CADempresa from '@/components/cadastro/CADempresa';
import CADcandidato from '@/components/cadastro/CADcandidato';
import EntrarEmpresaOuCandidato from '@/components/EntrarEmpresaOuCandidato.vue';
import EDCcandidato from '@/components/edicao/EDCcandidato.vue';
import PerfilCandidato from '@/pages/perfilCandidato.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Index }, // Página Index como a rota padrão
    { path: '/chat', component: Chat},
    { path: '/login', component: Login},
    { path: '/cadastro-empresa', component: CADempresa},
    { path: '/cadastro-candidato', component: CADcandidato},
    { path: '/empresa_candidato', component: EntrarEmpresaOuCandidato},
    { path: '/editar-candidato', component: EDCcandidato},
    { path: '/perfilCandidato',component: PerfilCandidato}
  ],
});

export default router;
