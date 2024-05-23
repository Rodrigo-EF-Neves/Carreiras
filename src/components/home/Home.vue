<template>
  <Navbar/>
  <div class="search-container">
    <h1>Encontre uma carreira para você!</h1>
    <div class="search-field">
      <v-card-text>
          <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact"
              label="Digite um cargo, cidade, estado." variant="solo" hide-details single-line @click:append-inner="onClick">
          </v-text-field>
      </v-card-text>
    </div>
  </div>
  <div class="mx-4">
    <CardVaga/>
  </div>
</template>

<script>
  export default {
    data: () => ({
        loaded: false,
        loading: false,
    }),

    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
}
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
    min-height: 48%;
    gap: 2.5em;
    padding: 0 5px;

    .search-field {
      max-width: 800px !important;
      width: 100% !important;
    }

    h1 {
      color: #fff;
    }
  }
</style>
