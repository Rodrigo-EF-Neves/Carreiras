<template>
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
              <a href="/">Home</a>
            </v-btn>
            <v-divider class="my-2"></v-divider>
            <v-btn variant="text" rounded>
              <a href="/agenda-candidato">Agenda</a>
            </v-btn>
            <v-divider class="my-2"></v-divider>
            <v-btn variant="text" rounded>
              <a href="/chat">Chat</a>
            </v-btn>
            <v-divider class="my-2"></v-divider>
            <v-btn variant="text" rounded>
              <a href="/curriculo">Curriculo</a>
            </v-btn>
            <v-divider class="my-2"></v-divider>
            <v-btn variant="text" rounded>
              <a href="/perfil-candidato">Perfil</a>
            </v-btn>
            <v-divider class="mt-2 mb-4"></v-divider>
            <v-btn variant="text" rounded prepend-icon="mdi-logout">
              <a href="/login">Sair</a>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
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

<style lang="scss" scoped></style>
