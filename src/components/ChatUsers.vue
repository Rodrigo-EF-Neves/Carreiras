<template>
    <div>
        <v-card-text>
            <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                label="Perquise um candidato" variant="solo" hide-details single-line @click:append-inner="onClick">
            </v-text-field>
        </v-card-text>
        <v-list lines="one" class="lista-users">
            <v-list-item v-for="n in 5" :key="n" :title="'Candidato ' + n" subtitle="Online 🟢"
                :prepend-avatar="'https://randomuser.me/api/portraits/women/' + n + '.jpg'" @click="buscaConversa(title='Candidato ' + n)">
            </v-list-item>
        </v-list>
    </div>
</template>

<style>
.v-list {
    /* margin: 10px 0 10px 0; */
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.v-list-item {
    cursor: pointer;
}
</style>

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
        
        buscaConversa(valor){
            alert("Conversa do " + valor);
        },
    },
}
</script>