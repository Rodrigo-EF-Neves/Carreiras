<template>
  <div class="search-container">
    <h1>Encontre uma carreira para você!</h1>
    <div style="width: 60%; min-width: 300px;">
      <v-text-field
        append-inner-icon="mdi-magnify"
        class="search-field"
        label="Digite um cargo, cidade, estado"
        variant="solo"
      ></v-text-field>
    </div>
  </div>
  <div>
    <!-- TODO cards de vagas -->
  </div>
</template>

<script setup>
  //
</script>

<style lang="scss" scoped>
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2em 1em;
    text-align: center;
    background-color: #6832D2;
    border: thin solid #5300DB;
    border-radius: 10px;
    min-height: 50%;
    gap: 2em;

    h1 {
      color: #fff;
    }
  }
</style>
