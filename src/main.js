// Plugins
import { registerPlugins } from '@/plugins'

// Components
import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

// Criação da aplicação Vue
const app = createApp(App)

// Registro de plugins
registerPlugins(app)

// Configuração do roteador
app.use(router)

// Montagem do aplicativo
app.mount('#app')
