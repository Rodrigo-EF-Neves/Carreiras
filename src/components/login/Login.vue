<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <div class="logo-container text-center">
          <img class="carreiras-logo" src="/src/assets/Logo_branco.png" alt="">
        </div>
        <v-card class="elevation-12" rounded="xl" >
          <v-card-text>
            <h1 class="text-center my-2">Login</h1>
            <v-form class="my-3"  @submit.prevent>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail" 
                class="mb-4"
                bg-color="#F7F7F7"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Senha"
                class="mb-4"
                bg-color="#F7F7F7"
              ></v-text-field>
              <div class="sign-in-buttons d-flex justify-center">
                <v-btn lass="adm-btn" density="comfortable" class="bg-purple-darken-4 me-2">Entrar</v-btn>
                <v-btn class="adm-btn " density="comfortable" variant="outlined">Cadastre-se</v-btn>
              </div>
              <div class="api-google">
                <br>
                <!--Usar aqui a api-->
                <br>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [(v) => !!v || 'Password is required'],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
}

.logo-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.carreiras-logo {
  height: 70px;
  width: fit-content;
  margin: 0 10px;
}

.sign-in-buttons {
  margin-top: 20px;
}

.adm-btn {
  border: thin solid #3a1c76!important;
  color: #3a1c76!important;
}
</style>