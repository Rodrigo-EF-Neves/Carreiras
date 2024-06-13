<template>
  <v-container fluid class="bg-white fill-height d-flex flex-column first-container" style="width: 100vw; height: 100vh;">
    <v-col class="align-start" style="padding: 0px!important;">
      <v-row style="display:flex; flex-direction: row;" class="bg-white fill-height">
        <v-col style="display:flex; flex-direction: column; align-items: center; width: 100%; padding: 0px !important" cols="12" md="6">
          <div class="div-logo">
            <img class="carreiras-logo" src="../assets/logo.png" alt="Logo" />
          </div>
          <h1 style="color: #4A148C; margin-top: 50px;">Candidato</h1>
          <v-btn style="font-weight: bold; color: white;" dark class="v-btn--size-x-large bg-purple-darken-4 v-btn--density-compact">Entrar</v-btn>
          <img class="img-person" src="../assets/happy-man.png" alt="Happy Man" />
        </v-col>
        <v-col style="display:flex; flex-direction: column; align-items: center; width: 100%; padding: 0px !important;" class="bg-purple-darken-4" cols="12" md="6">
          <h1 class="titulo-empresa">Empresa</h1>
          <v-btn style="color:rgba(58, 28, 118, 1);font-weight: bold;" outlined class="v-btn--size-x-large v-btn--density-compact">Entrar</v-btn>
          <img class="img-people" src="../assets/businesspeople.png" alt="Business People" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>



<script>
</script>

<style scoped>
.div-logo {
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 30px;
}
.carreiras-logo {
  width: 30%;
  height: auto;
}
.titulo-empresa {
  color: white;
  margin-top: 207px;
}
.img-people {
  width: 100%;
  margin-top: 15%;
}
.img-person {
  width: 40%;
  margin-top: 18%;
}
.first-container{
  width: 100%; 
  position: fixed;
}
@media (max-width: 955px) {
  .titulo-empresa {
    margin-top: 80px;
  }

  .img-people,
  .img-person {
    margin-top: 20px;
  }

  .div-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .first-container {
    position: static; 
  }
}
</style>
