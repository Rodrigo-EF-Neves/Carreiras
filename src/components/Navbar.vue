<template>
    <v-container fluid="true">
        <v-app-bar scroll-behavior="elevate">
            <div class="navbar-container">
                <div class="d-flex justify-center align-center">
                    <img class="carreiras-logo" src="../assets/Logo.png" alt="">
                </div>
                <!-- TODO Validar quando o usuário estiver logado (vai ser feito futuranente) -->
                <!-- <div class="sign-in-buttons">
                    <v-btn class="adm-btn" variant="outlined">
                        Adm
                    </v-btn>
                    <v-btn class="bg-purple-darken-4">
                        Login
                    </v-btn>
                </div> -->
                <div class="user-account-avatar">
                    <NavbarLogado/>
                </div>
            </div>
        </v-app-bar>
    </v-container>
</template>

<script setup>
import NavbarLogado from './NavbarLogado.vue';
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