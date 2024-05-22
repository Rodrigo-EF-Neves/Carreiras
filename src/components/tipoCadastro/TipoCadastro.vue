<template>
  <div class="content-full">

    <div class="div-logo">
      <img class="carreiras-logo" src="../../assets/logo.png" alt="" />
    </div>

    <div class="candidato-empresa">
      <div class="content-candidato">
        <div class="center-info">
          <h1 class="titulo">Cadidato</h1>
          <div class="button-solid">
            <a class="button-geral" href="">Entrar</a>
          </div>
          <img class="img-person" src="../../assets/happy-man.png" alt="" />
        </div>
      </div>

      <div class="content-empresa">
        <div class="center-info">
          <h1 class="titulo" style="color: white !important;">Empresa</h1>
          <div class="button-white">
            <a class="button-geral" style="color: black !important;" href="">Entrar</a>
          </div>
          <img class="img-people" src="../../assets/businesspeople.png" alt="" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.titulo {
  font-size: 28px;
  margin-bottom: 10px;
  color: rgba(58, 28, 118, 1);
}

.candidato-empresa {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.content-full {
  display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background-color: rgba(58, 28, 118, 1);
}

.div-logo{
  background-color: rgb(255, 255, 255);
    margin-right: 50%;
}

.carreiras-logo {
  width: 25%;
  height: auto;
  margin: 20px 20px;
}

.content-candidato {
  width: 50%;
  background-color: rgb(255, 255, 255);
}

.content-empresa {
  width: 50%;
}

.button-solid {
  padding: 6px 35px;
  background-color: rgba(58, 28, 118, 1);
  border-radius: 5px;
}

.button-white {
  padding: 6px 35px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  border-color: rgba(58, 28, 118, 1);
}

.button-geral {
  margin: none;
  color: white;
  text-decoration: none;
  font-size: larger;
  font-weight: bold;
}

.center-info {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-people {
  width: 100%;
  margin-top:50px;
}

.img-person {
  width: 40%;
  margin-top: 100px;
}
</style>
