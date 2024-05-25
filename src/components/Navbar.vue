<template>
    <v-container fluid="true">
        <v-app-bar scroll-behavior="elevate">
            <div class="navbar-container">
                <div class="d-flex justify-center align-center">
                    <img class="carreiras-logo" src="../assets/logo.png" alt="">
                </div>
                <!-- TODO Validar quando o usuário estiver logado (vai ser feito futurane) -->
                <!-- <div class="sign-in-buttons">
                    <v-btn class="adm-btn" variant="outlined">
                        Adm
                    </v-btn>
                    <v-btn class="bg-purple-darken-4">
                        Login
                    </v-btn>
                </div> -->
                <div class="user-account-avatar">
                    <v-menu min-width="200px" rounded>
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props">
                                <v-avatar color="brown" size="large">
                                    <span class="text-h5">{{ user.initials }}</span>
                                </v-avatar>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-text>
                                <div class="mx-auto text-center">
                                    <v-avatar color="brown">
                                        <span class="text-h5">{{ user.initials }}</span>
                                    </v-avatar>
                                    <h3>{{ user.fullName }}</h3>
                                    <p class="text-caption mt-1">
                                        {{ user.email }}
                                    </p>
                                    <v-divider class="my-2"></v-divider>
                                    <v-btn variant="text" rounded>
                                        Home
                                    </v-btn>
                                    <v-divider class="my-2"></v-divider>
                                    <v-btn variant="text" rounded>
                                        Agenda
                                    </v-btn>
                                    <v-divider class="my-2"></v-divider>
                                    <v-btn variant="text" rounded>
                                        Mensagens
                                    </v-btn>
                                    <v-divider class="my-2"></v-divider>
                                    <v-btn variant="text" rounded>
                                        Currículo
                                    </v-btn>
                                    <v-divider class="my-2"></v-divider>
                                    <v-btn variant="text" rounded>
                                        Editar perfil
                                    </v-btn>
                                    <v-divider class="mt-2 mb-4"></v-divider>
                                    <v-btn variant="text" rounded prepend-icon="mdi-logout">
                                        Sair
                                    </v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </div>
            </div>
        </v-app-bar>
    </v-container>
</template>

<script>
import NavbarLogado from './NavbarLogado.vue';

export default {
    data: () => ({
      user: {
        initials: 'JD',
        fullName: 'Junior Dev',
        email: 'juniordev@gmail.com',
      },
    }),
}
</script>

<style lang="scss">
.v-container {
    padding: 0 !important;
}
.v-app-bar {
    border-bottom: 1px solid #C3C3C3 !important;
}

.navbar-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.carreiras-logo {
    height: 55px;
    width: fit-content;
    margin: 0 10px;

    img {
        width: 100%;
    }
}

.sign-in-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    gap: 10px;
}

.adm-btn {
    border: thin solid #3A1C76 !important;
    color: #3A1C76 !important;
}

.user-account-avatar {
    margin: 0 20px;
}
</style>